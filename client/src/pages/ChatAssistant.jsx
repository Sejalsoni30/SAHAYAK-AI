import React, { useState } from 'react';
import { Send, Globe, Bot, User, ShieldCheck, Paperclip, Mic, ChevronRight, ThumbsUp, ThumbsDown, Copy, RefreshCw, CheckCircle, Clock, BookOpen, MessageSquare, AlertCircle, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sendChatMessage } from '../services/api';

export default function ChatAssistant() {
  const [messages, setMessages] = useState([
    {
      sender: 'user',
      text: 'मुझे छात्रवृत्ति के लिए कौन-कौन सी योजनाएं मिल सकती हैं?',
      time: '10:24 AM'
    },
    {
      sender: 'ai',
      text: 'आपके लिए निम्नलिखित प्रमुख छात्रवृत्ति योजनाएं उपलब्ध हो सकती हैं:\n1. पोस्ट मैट्रिक छात्रवृत्ति (SC/ST/OBC)\n2. प्रधानमंत्री छात्रवृत्ति योजना\n3. राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)\n4. राज्य सरकार की शैक्षणिक सहायता योजनाएं\n\nकृपया अपनी शैक्षणिक योग्यता और वर्ग (SC/ST/OBC/General) की जानकारी के आधार पर आवेदन करें। अधिक जानकारी के लिए नीचे दिए गए स्रोत देखें।',
      time: '10:24 AM',
      sources: [
        { title: 'National Scholarship Portal (NSP)', url: 'https://scholarships.gov.in', type: 'Government Portal', date: 'Updated: 10 Sep 2026' }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [lang, setLang] = useState('hi');
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  const [showQuickActions, setShowQuickActions] = useState(false); // Set to false since chat is populated in mockup

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Speech recognition is not supported in your browser. Please use Chrome.");
      return;
    }
    
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev) => prev + (prev ? ' ' : '') + transcript);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const sendMessage = async (userMessage) => {
    if (!userMessage.trim() || loading) return;

    const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage, time: currentTime }]);
    setLoading(true);
    setShowQuickActions(false);

    try {
      const data = await sendChatMessage(userMessage, lang);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: data.reply,
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
          sources: data.sources || []
        }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: lang === 'hi' ? 'क्षमा करें, सर्वर से संपर्क करने में समस्या आ रही है।' : 'Sorry, unable to connect to the server right now.',
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
          sources: []
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const msg = input;
    setInput('');
    await sendMessage(msg);
  };

  return (
    <div className="flex h-[calc(100vh-70px)] bg-[#f7f7fb] p-4 gap-4 overflow-hidden">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-72 flex flex-col gap-4 overflow-y-auto hidden lg:flex">
        {/* Recent Conversations */}
        <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-4 border border-indigo-50 shadow-sm flex-1 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2"><Clock size={16} className="text-gray-400"/> Recent Conversations</h3>
            <span className="text-xs text-indigo-600 font-semibold cursor-pointer">View All</span>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { title: 'Scholarship eligibility', time: '2 hours ago' },
              { title: 'Income certificate process', time: '5 hours ago' },
              { title: 'PM Kisan scheme details', time: '1 day ago' },
              { title: 'Documents for application', time: '1 day ago' },
              { title: 'Ration card benefits', time: '2 days ago' }
            ].map((conv, i) => (
              <div key={i} className="flex gap-3 items-start p-3 hover:bg-gray-50 dark:hover:bg-[#2a2a4a] rounded-xl cursor-pointer transition-colors border border-transparent hover:border-gray-100 dark:hover:border-[#3a3a5a]">
                <MessageSquare size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-tight">{conv.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{conv.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-indigo-100 flex items-center gap-3">
          <div className="bg-white dark:bg-[#1a1a2e] p-2 rounded-xl shadow-sm text-indigo-600">
            <ShieldCheck size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-indigo-900 leading-tight">Government Services</p>
            <p className="text-xs text-indigo-700 font-semibold mt-0.5">Now at Your Fingertips</p>
          </div>
          <ChevronRight size={16} className="text-indigo-400 ml-auto" />
        </div>
      </aside>

      {/* MAIN CHAT AREA */}
      <main className="flex-1 flex flex-col min-w-0 bg-white dark:bg-[#1a1a2e] rounded-2xl border border-indigo-50 shadow-sm overflow-hidden relative">
        
        {/* Chat Header Background Graphic (Only if empty, but we'll put it at top) */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-indigo-50/80 to-transparent pointer-events-none z-0"></div>

        {/* AI Profile Header Compact */}
        <div className="relative z-10 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 dark:border-[#2a2a4a]/50 bg-white/50 dark:bg-[#1a1a2e]/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-800">
               <Bot size={22} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white leading-tight flex items-center gap-2">
                Sahayak-AI 
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/40 px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-200 dark:border-emerald-800">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div> Ready
                </span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 flex items-center gap-2 font-medium">
                <Globe size={12} className="text-indigo-400"/> Multilingual <span className="text-gray-300 dark:text-gray-600">•</span> <ShieldCheck size={12} className="text-emerald-500"/> Verified Sources
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
             <div className="bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-[#3a3a5a] rounded-full px-3 py-1.5 flex items-center gap-2 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow">
               <Globe size={14} className="text-gray-400"/>
               <select value={lang} onChange={(e) => setLang(e.target.value)} className="bg-transparent border-none outline-none cursor-pointer pr-1 text-gray-700 dark:text-gray-200 font-bold appearance-none">
                 <option value="hi">Hindi</option>
                 <option value="en">English</option>
                 <option value="mr">Marathi</option>
               </select>
             </div>
          </div>
        </div>

        {/* Quick Actions (Conditionally render if empty chat, but mockup shows them above chat) */}
        {showQuickActions && (
          <div className="relative z-10 px-6 py-4">
            <p className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-1"><AlertCircle size={14} className="text-indigo-500"/> Quick Actions</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { icon: <ShieldCheck size={20}/>, label: 'Government Schemes', color: 'text-amber-500', bg: 'bg-amber-50' },
                { icon: <BookOpen size={20}/>, label: 'Scholarships', color: 'text-purple-500', bg: 'bg-purple-50' },
                { icon: <FileText size={20}/>, label: 'Certificates', color: 'text-emerald-500', bg: 'bg-emerald-50' },
                { icon: <FileText size={20}/>, label: 'Required Documents', color: 'text-blue-500', bg: 'bg-blue-50' },
                { icon: <Globe size={20}/>, label: 'Application Guidance', color: 'text-pink-500', bg: 'bg-pink-50' },
                { icon: <ShieldCheck size={20}/>, label: 'Public Services', color: 'text-indigo-500', bg: 'bg-indigo-50' }
              ].map((action, i) => (
                <div key={i} className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-[#2a2a4a] rounded-xl p-3 flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-md hover:border-indigo-100 transition-all text-center group">
                  <div className={`p-2 rounded-lg ${action.bg} ${action.color} group-hover:scale-110 transition-transform`}>{action.icon}</div>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-200 leading-tight">{action.label}</span>
                  <ChevronRight size={12} className="text-gray-300 mt-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Chat Thread */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 relative z-10">
          {messages.map((m, index) => (
            <div key={index} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'} w-full animate-fade-up`}>
              
              {m.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 mr-3 mt-1">
                  <Bot size={18} className="text-indigo-600" />
                </div>
              )}

              <div className={`max-w-[85%] ${m.sender === 'user' ? 'bg-indigo-50 text-indigo-900 border border-indigo-100 rounded-2xl rounded-tr-sm' : 'bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-[#3a3a5a] shadow-sm rounded-2xl rounded-tl-sm'} p-4 relative group`}>
                
                <p className="text-[15px] leading-relaxed whitespace-pre-wrap text-gray-800 dark:text-gray-100">{m.text}</p>
                
                {/* Verified Sources Box */}
                {m.sources && m.sources.length > 0 && (
                  <div className="mt-4 border border-emerald-100 bg-emerald-50/50 rounded-xl p-3">
                    <p className="text-xs font-bold text-emerald-800 flex items-center gap-1.5 mb-2">
                      <ShieldCheck size={14} /> Verified Sources
                    </p>
                    {m.sources.map((src, sIdx) => (
                      <div key={sIdx} className="bg-white dark:bg-[#1a1a2e] border border-emerald-100 rounded-lg p-2.5 flex items-center justify-between cursor-pointer hover:shadow-sm transition-shadow">
                        <div className="flex items-start gap-2">
                          <span className="text-xs font-bold text-gray-400 mt-0.5">{sIdx + 1}.</span>
                          <div>
                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{src.title} <span className="text-[10px] text-gray-400 font-normal ml-1 border-l border-gray-200 dark:border-[#3a3a5a] pl-2">{src.type} • {src.date}</span></p>
                            <a href={src.url || '#'} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline flex items-center gap-1 mt-0.5">
                              🔗 {src.url}
                            </a>
                          </div>
                        </div>
                        <ChevronRight size={16} className="text-gray-400" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Options */}
                {m.sender === 'ai' && m.sources && m.sources.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-[#2a2a4a]">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">Action Options</p>
                    <div className="flex flex-wrap gap-2">
                      <button onClick={() => sendMessage(lang === 'hi' ? 'पात्रता की जांच करें' : 'Check Eligibility')} className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg text-xs font-semibold transition-colors border border-indigo-100">
                        <CheckCircle size={14} /> Check Eligibility
                      </button>
                      <button onClick={() => sendMessage(lang === 'hi' ? 'आवश्यक दस्तावेज़ देखें' : 'View Required Documents')} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-semibold transition-colors border border-blue-100">
                        <FileText size={14} /> View Required Documents
                      </button>
                      <button onClick={() => sendMessage(lang === 'hi' ? 'आवेदन शुरू करें' : 'Start Application')} className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg text-xs font-semibold transition-colors border border-emerald-100">
                        <ArrowRight size={14} /> Start Application
                      </button>
                    </div>
                  </div>
                )}

                {/* Footer Tools */}
                <div className={`flex items-center gap-3 mt-3 text-xs text-gray-400 ${m.sender === 'user' ? 'justify-end' : 'justify-between'}`}>
                  {m.sender === 'ai' && (
                    <div className="flex items-center gap-3 transition-opacity text-gray-400">
                      <button className="hover:text-gray-600 dark:text-gray-200 transition-colors"><ThumbsUp size={14}/></button>
                      <button className="hover:text-gray-600 dark:text-gray-200 transition-colors"><ThumbsDown size={14}/></button>
                      <button 
                        onClick={() => navigator.clipboard.writeText(m.text)}
                        className="hover:text-gray-600 dark:text-gray-200 transition-colors flex items-center gap-1"
                      >
                        <Copy size={12}/> Copy
                      </button>
                      <button className="hover:text-gray-600 dark:text-gray-200 transition-colors flex items-center gap-1"><RefreshCw size={12}/> Regenerate</button>
                    </div>
                  )}
                  <span className={m.sender === 'user' ? 'text-indigo-400' : ''}>{m.time}</span>
                </div>
              </div>

              {m.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-indigo-600 border border-indigo-700 flex items-center justify-center shrink-0 ml-3 mt-1 text-white">
                  <User size={16} />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex justify-start w-full animate-fade-up">
              <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 mr-3 mt-1">
                  <Bot size={18} className="text-indigo-600" />
              </div>
              <div className="bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-[#3a3a5a] shadow-sm rounded-2xl rounded-tl-sm p-4">
                <div className="typing-indicator !bg-transparent !p-0 !shadow-none">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white dark:bg-[#1a1a2e] border-t border-gray-100 dark:border-[#2a2a4a] z-10">
          <form onSubmit={handleSend} className="max-w-4xl mx-auto relative flex items-center">
            
            {/* Left Attachments */}
            <div className="absolute left-3 flex items-center gap-2 text-gray-400">
              <button 
                type="button" 
                onClick={() => document.getElementById('file-upload').click()}
                className="p-1.5 hover:bg-gray-100 dark:hover:bg-[#3a3a5a] rounded-lg transition-colors"
                title="Attach Document"
              >
                <Paperclip size={18} />
              </button>
              <input 
                type="file" 
                id="file-upload" 
                className="hidden" 
                onChange={(e) => {
                  if (e.target.files.length > 0) {
                    alert(`Document attached: ${e.target.files[0].name}\n(This is a mockup. The file won't actually be uploaded.)`);
                  }
                }} 
              />
              <button 
                type="button" 
                onClick={startListening}
                className={`p-1.5 rounded-lg transition-colors ${isListening ? 'bg-red-100 text-red-500 animate-pulse' : 'hover:bg-gray-100 dark:hover:bg-[#3a3a5a]'}`}
                title="Voice Input"
              >
                <Mic size={18} />
              </button>
            </div>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={lang === 'hi' ? 'अपना संदेश यहाँ लिखें...' : 'Type your message here...'}
              className="w-full bg-gray-50 dark:bg-[#2a2a4a] border border-gray-200 dark:border-[#3a3a5a] text-gray-800 dark:text-gray-100 text-[15px] rounded-2xl pl-24 pr-32 py-3.5 focus:outline-none focus:border-indigo-300 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-[#1a1a2e] transition-colors shadow-sm"
            />
            
            {/* Right Actions */}
            <div className="absolute right-2 flex items-center gap-3 text-xs text-gray-400 font-semibold">
              <span className="hidden sm:inline">Shift + Enter for new line</span>
              <button 
                type="submit" 
                disabled={loading || !input.trim()} 
                className="bg-[#e8601c] hover:bg-[#d05315] disabled:opacity-50 disabled:cursor-not-allowed text-white p-2.5 rounded-xl shadow-[0_4px_12px_rgba(232,96,28,0.3)] transition-all"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>

      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="w-80 flex flex-col gap-4 overflow-y-auto hidden xl:flex">
        
        {/* Suggested Questions */}
        <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-4 border border-indigo-50 shadow-sm">
          <h3 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2 mb-3"><Sparkles size={16} className="text-amber-500"/> Suggested Questions</h3>
          <div className="flex flex-col gap-2">
            {[
              'कौन-कौन सी छात्रवृत्ति उपलब्ध हैं?',
              'आय प्रमाण पत्र के लिए कौन से दस्तावेज़ चाहिए?',
              'सरकारी योजना के लिए आवेदन कैसे करें?',
              'PM Kisan status kaise check kare?',
              'Ayushman Bharat scheme benefits?',
              'How to apply for driving license?',
              'Nearest center for Aadhaar update?',
              'किसानों के लिए कौन सी नई योजनाएं हैं?',
              'पैन कार्ड (PAN card) कैसे बनवाएं?',
              'Sukanya Samriddhi Yojana details?',
              'How to get birth certificate online?',
              'मुद्रा योजना (Mudra Yojana) लोन कैसे लें?',
              'EPF balance check process?',
              'वोटर आईडी (Voter ID) में पता कैसे बदलें?',
              'What is the National Pension System (NPS)?',
              'Ujjwala Yojana free gas connection?',
              'प्रधानमंत्री आवास योजना (PMAY) की पात्रता?',
              'E-Shram card registration benefits?',
              'Senior citizen train ticket concession?',
              'अटल पेंशन योजना (APY) क्या है?',
              'MSME Udyam registration online?',
              'जन धन योजना खाता कैसे खोलें?'
            ].map((q, i) => (
              <button key={i} onClick={() => setInput(q)} className="text-left w-full p-3 bg-white dark:bg-[#2a2a4a] border border-gray-100 dark:border-[#3a3a5a] rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 hover:border-indigo-300 dark:hover:border-indigo-400 hover:shadow-sm transition-all flex items-center justify-between group">
                <span className="truncate pr-2">{q}</span>
                <ChevronRight size={14} className="text-gray-300 group-hover:text-indigo-500 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Language Support */}
        <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-4 border border-indigo-50 shadow-sm">
          <h3 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2 mb-1"><Globe size={16} className="text-blue-500"/> Language Support</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 ml-6">Available in multiple languages</p>
          <div className="grid grid-cols-2 gap-2">
             <button className="py-2 px-3 border border-amber-500 bg-amber-50 text-amber-700 font-bold rounded-xl text-sm shadow-[0_2px_8px_rgba(245,158,11,0.15)]">हिंदी</button>
             <button className="py-2 px-3 border border-gray-200 dark:border-[#3a3a5a] text-gray-600 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-[#2a2a4a] rounded-xl text-sm transition-colors">English</button>
             <button className="py-2 px-3 border border-gray-200 dark:border-[#3a3a5a] text-gray-600 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-[#2a2a4a] rounded-xl text-sm transition-colors">मराठी</button>
             <button className="py-2 px-3 border border-gray-200 dark:border-[#3a3a5a] text-gray-600 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-[#2a2a4a] rounded-xl text-sm transition-colors">বাংলা</button>
             <button className="py-2 px-3 border border-gray-200 dark:border-[#3a3a5a] text-gray-600 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-[#2a2a4a] rounded-xl text-sm transition-colors">தமிழ்</button>
          </div>
        </div>

        {/* Recent Services */}
        <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-4 border border-indigo-50 shadow-sm flex-1">
          <h3 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2 mb-4"><FileText size={16} className="text-emerald-500"/> Recent Services</h3>
          <div className="flex flex-col gap-4">
            {[
              { title: 'Scholarship Scheme', time: 'Today, 10:24 AM', color: 'bg-emerald-100 text-emerald-600' },
              { title: 'Income Certificate', time: 'Yesterday, 4:15 PM', color: 'bg-blue-100 text-blue-600' },
              { title: 'Ration Card', time: '2 days ago, 11:30 AM', color: 'bg-amber-100 text-amber-600' }
            ].map((srv, i) => (
              <div key={i} className="flex gap-3 items-center p-2 hover:bg-gray-50 dark:hover:bg-[#2a2a4a] rounded-xl cursor-pointer transition-colors group">
                <div className={`p-2 rounded-lg ${srv.color} shrink-0`}><FileText size={16} /></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-100 truncate">{srv.title}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{srv.time}</p>
                </div>
                <ChevronRight size={14} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

      </aside>
    </div>
  );
}