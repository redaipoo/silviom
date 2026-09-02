import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught application error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#02282D] text-[#F6F1E8] flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="w-16 h-16 rounded-2xl bg-[#074247] border border-[#BB9A6B]/40 flex items-center justify-center mb-4 text-[#BB9A6B] text-2xl font-bold">
            !
          </div>
          <h1 className="text-xl sm:text-2xl font-bold mb-2">حدث خطأ بسيط في التحميل</h1>
          <p className="text-xs sm:text-sm text-[#DCD4C6] max-w-sm mb-6 leading-relaxed">
            يرجى تحديث الصفحة أو الضغط على الزر أدناه للعودة للرئيسية.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 rounded-xl bg-[#BB9A6B] text-[#02282D] font-bold text-xs shadow-lg hover:bg-[#DFCAA7] transition-all"
            >
              تحديث الصفحة
            </button>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.href = '/';
              }}
              className="px-5 py-2.5 rounded-xl bg-[#074247] text-[#F6F1E8] border border-[#BB9A6B]/30 font-bold text-xs hover:bg-[#063B40] transition-all"
            >
              الصفحة الرئيسية
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
