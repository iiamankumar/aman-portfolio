#!/bin/bash
# Portfolio Management Script

case "$1" in
  start)
    echo "🚀 Starting portfolio application..."
    supervisorctl start portfolio_app
    echo "✅ Application started on http://localhost:5000"
    ;;
  stop)
    echo "⏹️  Stopping portfolio application..."
    supervisorctl stop portfolio_app
    echo "✅ Application stopped"
    ;;
  restart)
    echo "🔄 Restarting portfolio application..."
    supervisorctl restart portfolio_app
    echo "✅ Application restarted"
    ;;
  status)
    echo "📊 Portfolio Application Status:"
    supervisorctl status portfolio_app
    ;;
  logs)
    echo "📜 Viewing application logs (Ctrl+C to exit)..."
    tail -f /var/log/supervisor/portfolio.out.log
    ;;
  errors)
    echo "⚠️  Viewing error logs (Ctrl+C to exit)..."
    tail -f /var/log/supervisor/portfolio.err.log
    ;;
  db-reset)
    echo "🗄️  Resetting database..."
    rm -f /app/portfolio.db
    cd /app && npm run db:push
    echo "✅ Database reset complete"
    supervisorctl restart portfolio_app
    ;;
  test)
    echo "🧪 Testing API endpoints..."
    echo ""
    echo "📋 Projects:"
    curl -s http://localhost:5000/api/projects | jq 'length' | xargs echo "  Count:"
    echo ""
    echo "🛠️  Skills:"
    curl -s http://localhost:5000/api/skills | jq 'length' | xargs echo "  Count:"
    echo ""
    echo "✉️  Contact Form:"
    curl -s -X POST http://localhost:5000/api/contact \
      -H "Content-Type: application/json" \
      -d '{"name":"Test","email":"test@example.com","message":"Test"}' | jq .
    echo ""
    echo "✅ API tests complete"
    ;;
  *)
    echo "Portfolio Management Script"
    echo ""
    echo "Usage: $0 {start|stop|restart|status|logs|errors|db-reset|test}"
    echo ""
    echo "Commands:"
    echo "  start     - Start the application"
    echo "  stop      - Stop the application"
    echo "  restart   - Restart the application"
    echo "  status    - Check application status"
    echo "  logs      - View application logs"
    echo "  errors    - View error logs"
    echo "  db-reset  - Reset database and reseed"
    echo "  test      - Test API endpoints"
    echo ""
    exit 1
    ;;
esac

exit 0
