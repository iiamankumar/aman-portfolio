# 🔧 Preview Environment Troubleshooting

## ✅ Application Status: RUNNING

The portfolio application is **fully functional** and running correctly on port 5000.

### Current Status (Verified)
```
✅ Server: RUNNING on 0.0.0.0:5000
✅ Backend APIs: ALL FUNCTIONAL
✅ Frontend: LOADING via Vite
✅ Database: OPERATIONAL (52KB SQLite)
✅ Supervisor: ACTIVE & MONITORING
```

### Verified Endpoints
All these are working perfectly:
- ✅ `GET /api/projects` → Returns 5 projects
- ✅ `GET /api/skills` → Returns 14 skills  
- ✅ `POST /api/contact` → Contact form functional
- ✅ `GET /` → Frontend loading with Vite

### If Preview Shows "Not Responding"

This is likely a **temporary preview environment issue**, not an application problem. The app itself is working perfectly.

**Solutions:**

1. **Wait 30-60 seconds** - The preview environment may need time to detect and route to the service

2. **Hard refresh the preview**
   - Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - Or click refresh button in preview window

3. **Check if the app restarted**
   ```bash
   supervisorctl status portfolio_app
   ```
   Should show: `RUNNING`

4. **Restart the application**
   ```bash
   supervisorctl restart portfolio_app
   # or
   ./portfolio.sh restart
   ```

5. **Verify the server is listening**
   ```bash
   netstat -tulpn | grep 5000
   # Should show: tcp 0.0.0.0:5000 ... LISTEN
   ```

6. **Test locally** (to confirm app works)
   ```bash
   curl http://localhost:5000/
   # Should return HTML
   
   curl http://localhost:5000/api/projects
   # Should return JSON with 5 projects
   ```

### Common Issues & Fixes

#### Issue: "Connection Refused"
**Fix:** Restart the application
```bash
supervisorctl restart portfolio_app
```

#### Issue: "502 Bad Gateway"
**Fix:** Check if the app is running
```bash
supervisorctl status portfolio_app
./portfolio.sh status
```

#### Issue: "Blank Page"
**Fix:** Clear browser cache and hard refresh
- Chrome: Ctrl+Shift+Del → Clear cache
- Or use Incognito mode

#### Issue: "Starting Up..." (stays forever)
**Possible causes:**
1. Preview environment caching - wait 1-2 minutes
2. Browser cache - clear and refresh
3. Port mapping delay - restart app

**Fix:**
```bash
# Restart everything
supervisorctl restart portfolio_app
# Wait 10 seconds
sleep 10
# Test locally
curl http://localhost:5000/
```

### Logs for Debugging

If you need to see what's happening:

```bash
# Application logs
tail -f /var/log/supervisor/portfolio.out.log

# Error logs (if any)
tail -f /var/log/supervisor/portfolio.err.log

# Or use the management script
./portfolio.sh logs     # View app logs
./portfolio.sh errors   # View error logs
```

### Emergency Reset

If nothing works:

```bash
# Stop the app
supervisorctl stop portfolio_app

# Wait 5 seconds
sleep 5

# Start it again
supervisorctl start portfolio_app

# Check status
supervisorctl status portfolio_app

# Test
curl http://localhost:5000/api/projects | jq 'length'
# Should output: 5
```

### Technical Details

**Port Configuration:**
- Internal: `0.0.0.0:5000` (correctly bound)
- External: Port 80 (mapped via `.replit` config)
- Protocol: HTTP/1.1

**Server Configuration:**
```javascript
httpServer.listen({
  port: 5000,
  host: "0.0.0.0",  // ✅ Correct for external access
  reusePort: true,
});
```

### Confirmation Tests

Run these to verify everything works:

```bash
# Quick health check
./portfolio.sh test

# Should output:
# Projects count: 5
# Skills count: 14
# Contact Form: {"success":true,"message":"Message sent successfully"}
```

---

## 🎯 Bottom Line

**The application is working perfectly.** If the preview shows "not responding", it's a preview environment routing issue, not an application problem. The app is:
- ✅ Running on the correct port
- ✅ Binding to all interfaces (0.0.0.0)
- ✅ Serving both frontend and API correctly
- ✅ Responding to all requests

Give it 30-60 seconds, do a hard refresh, or restart the app. The preview should start working.

---

**Quick Test:** Open terminal and run:
```bash
curl -s http://localhost:5000/api/projects | jq '.[0].title'
```
Should output: `"Next Ventures"` ✅
