import { useState } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "Which campaigns are underperforming this week?",
  "Show me budget optimization opportunities",
  "What's the ROI trend for Meta Ads?",
  "Predict next month's spend",
  "Find audiences with highest conversion rates",
  "Compare channel performance vs last month",
];

export default function Assistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content: "Hello! I'm your AI assistant for MediaPulse. I can help you analyze your media performance, find optimization opportunities, and answer questions about your campaigns. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        role: 'assistant',
        content: getAIResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes('underperform')) {
      return "Based on my analysis, I've identified 2 underperforming campaigns:\n\n1. **Brand Awareness 2024** (TechStart) - Currently over pacing at 118% with a 2.8x ROI, which is below target.\n\n2. **Product Launch - Series X** (GadgetPro) - Under pacing at 72% with only 38% budget utilized. Consider increasing spend to meet campaign goals.\n\nWould you like me to suggest specific optimizations for these campaigns?";
    }

    if (lowerQuery.includes('budget') || lowerQuery.includes('optimization')) {
      return "I've found several budget optimization opportunities:\n\n1. **Reallocate from Display to Paid Search** - Display ROI has declined 8%. Moving $25K could yield +12% ROI improvement.\n\n2. **Reduce Meta spend temporarily** - CPC increased 45% due to Q4 competition. Consider shifting budget to programmatic.\n\n3. **Merge overlapping audiences** - Campaign A and B have 68% overlap. Consolidating could save $8K in redundant spend.\n\nTotal potential savings: **$51K this month**. Want me to implement any of these?";
    }

    if (lowerQuery.includes('roi') || lowerQuery.includes('trend')) {
      return "Here's the ROI trend analysis:\n\n**Overall ROI: 3.1x** (+5.2% vs last period)\n\n**Top Performers:**\n- Google Ads: 4.2x ROI\n- AI Search (GEO): 3.8x ROI\n- Meta Ads: 3.8x ROI\n\n**Needs Attention:**\n- LinkedIn: 2.1x ROI (consider B2B targeting optimization)\n- Sermo: 2.5x ROI\n\nThe upward trend is driven primarily by improved conversion rates in Q4 holiday campaigns.";
    }

    if (lowerQuery.includes('predict') || lowerQuery.includes('forecast')) {
      return "Based on historical data and current trends, here's my spend prediction:\n\n**December 2024:** $1.4M (projected)\n**January 2025:** $1.6M (forecasted)\n**February 2025:** $1.8M (forecasted)\n\n**Key factors:**\n- Q4 holiday push winding down\n- Q1 brand awareness campaigns ramping up\n- Seasonality shows 15% increase in CPMs in January\n\nForecast confidence: **94.2%**";
    }

    return "I'd be happy to help with that! Based on your current campaign data, I can provide insights on:\n\n• Campaign performance and optimization\n• Budget allocation recommendations\n• ROI analysis and forecasting\n• Audience targeting suggestions\n• Channel comparison metrics\n\nCould you provide more details about what specific aspect you'd like me to analyze?";
  };

  const handleSuggestionClick = (question: string) => {
    setInput(question);
  };

  return (
    <div className="h-[calc(100vh-2rem)] flex flex-col">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-violet-400" />
          AI Assistant
        </h1>
        <p className="text-slate-400 text-sm mt-1">Get instant insights and recommendations powered by AI</p>
      </div>

      <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl flex flex-col overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
              {message.role === 'assistant' && (
                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              <div className={`max-w-[70%] ${message.role === 'user' ? 'bg-violet-600' : 'bg-slate-700/50'} rounded-xl p-4`}>
                <p className="text-white whitespace-pre-wrap">{message.content}</p>
                <p className="text-slate-400 text-xs mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              {message.role === 'user' && (
                <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Suggestions */}
        {messages.length === 1 && (
          <div className="px-6 pb-4">
            <p className="text-slate-400 text-sm mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleSuggestionClick(question)}
                  className="bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 px-3 py-1.5 rounded-full text-sm transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask AI anything about your media performance..."
              className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            />
            <button
              onClick={handleSend}
              className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
