import { motion } from "framer-motion";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Link } from "wouter";
import { ArrowLeft, Pencil, Send, X } from "lucide-react";
import { SiGithub, SiGoogle } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useAuth } from "@/hooks/use-auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import type { GuestbookEntry } from "@shared/schema";

const guestbookFormSchema = z.object({
  message: z.string().min(1, "Message is required").max(500, "Message is too long (max 500 characters)"),
});

type GuestbookFormData = z.infer<typeof guestbookFormSchema>;

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function Wall() {
  const { toast } = useToast();
  const { user, isLoading: authLoading, isAuthenticated } = useAuth();
  const [showSignIn, setShowSignIn] = useState(false);
  
  const form = useForm<GuestbookFormData>({
    resolver: zodResolver(guestbookFormSchema),
    defaultValues: {
      message: "",
    },
  });

  const { data: entries = [], isLoading } = useQuery<GuestbookEntry[]>({
    queryKey: ['/api/guestbook'],
    refetchInterval: 5000,
  });

  const submitMutation = useMutation({
    mutationFn: async (data: GuestbookFormData) => {
      return apiRequest('POST', '/api/guestbook', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/guestbook'] });
      form.reset();
      toast({
        title: "Message posted!",
        description: "Your mark has been left on the wall.",
      });
    },
    onError: (error: Error) => {
      if (error.message.includes('401')) {
        setShowSignIn(true);
        return;
      }
      toast({
        title: "Error",
        description: "Failed to post message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: GuestbookFormData) => {
    if (!isAuthenticated) {
      setShowSignIn(true);
      return;
    }
    submitMutation.mutate(data);
  };

  const handleWriteClick = () => {
    if (!isAuthenticated) {
      setShowSignIn(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0tNiA2aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

      {showSignIn && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" data-testid="modal-signin">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-[#1a1a1a] rounded-3xl p-8 max-w-md w-full mx-4 border border-white/10"
          >
            <button
              onClick={() => setShowSignIn(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
              data-testid="button-close-signin"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h2 className="text-2xl font-bold mb-2">Sign in</h2>
            <p className="text-white/50 mb-8">to continue to the community wall</p>
            
            <div className="space-y-4">
              <a
                href="/api/auth/github"
                className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
                data-testid="button-signin-github"
              >
                <SiGithub className="w-5 h-5" />
                <span>Continue with GitHub</span>
              </a>
              <a
                href="/api/login"
                className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
                data-testid="button-signin-google"
              >
                <SiGoogle className="w-5 h-5 text-blue-400" />
                <span>Continue with Google</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}

      <div className="relative max-w-4xl mx-auto px-6 py-16">
        <Link href="/">
          <motion.div
            whileHover={{ x: -4 }}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 cursor-pointer"
            data-testid="link-back-home"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/40 block mb-4">THE COMMUNITY WALL</span>
          <h1 className="text-4xl md:text-6xl font-bold">
            Leave <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent italic">Your Mark</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative bg-[#111]/80 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/10"
        >
          <div className="text-center mb-6">
            <p className="text-2xl font-light italic mb-2">"Join the wall..."</p>
            <p className="text-white/50">Sign in to pin your message to this board forever.</p>
          </div>
          
          {isAuthenticated ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  {user?.profileImageUrl ? (
                    <img src={user.profileImageUrl} alt="" className="w-10 h-10 rounded-full" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-purple-500/80 flex items-center justify-center text-white font-semibold">
                      {user?.firstName?.charAt(0) || user?.email?.charAt(0) || '?'}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{user?.firstName} {user?.lastName}</p>
                    <p className="text-sm text-white/50">{user?.email}</p>
                  </div>
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Leave your message..."
                          rows={3}
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none"
                          data-testid="input-guestbook-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <div className="flex justify-center gap-3">
                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 gap-2"
                    data-testid="button-submit-message"
                  >
                    <Send className="w-4 h-4" />
                    {submitMutation.isPending ? "Posting..." : "Post Message"}
                  </Button>
                </div>
              </form>
            </Form>
          ) : (
            <div className="flex justify-center">
              <Button
                onClick={handleWriteClick}
                className="rounded-full bg-white text-black gap-2"
                data-testid="button-write-message"
              >
                <Pencil className="w-4 h-4" />
                Write a message...
              </Button>
            </div>
          )}
        </motion.div>

        <div className="space-y-4">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : entries.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 text-white/40"
            >
              <p className="text-lg">No messages yet. Be the first to leave your mark!</p>
            </motion.div>
          ) : (
            entries.map((entry, index) => {
              const createdAt = new Date(entry.createdAt!);
              const initials = entry.userName.charAt(0).toUpperCase();
              
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-blue-600/90 to-blue-700/90 rounded-2xl p-6 relative overflow-hidden"
                  data-testid={`card-guestbook-entry-${entry.id}`}
                >
                  <div className="absolute top-4 left-4 text-6xl font-serif text-blue-400/30">"</div>
                  
                  <div className="relative z-10">
                    <p className="text-xl font-medium mb-6 pl-6">"{entry.message}"</p>
                    
                    <div className="flex items-center gap-3">
                      {entry.userImage ? (
                        <img src={entry.userImage} alt="" className="w-10 h-10 rounded-full" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-purple-500/80 flex items-center justify-center text-white font-semibold">
                          {initials}
                        </div>
                      )}
                      <div>
                        <p className="font-semibold">{entry.userName}</p>
                        <p className="text-sm text-white/60">
                          {formatDate(createdAt)} • {formatTimeAgo(createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 text-white/30 text-sm"
        >
          Messages refresh automatically every 5 seconds
        </motion.div>
      </div>
    </div>
  );
}
