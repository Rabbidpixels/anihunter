import { MangaPanel } from "./MangaPanel";
import { Share2 } from "lucide-react";

interface ResultPanelProps {
  solved: boolean;
  failed: boolean;
  guessCount: number;
  streakMessage: string | null;
  shareText: string;
}

export const ResultPanel = ({ 
  solved, 
  failed, 
  guessCount, 
  streakMessage,
  shareText 
}: ResultPanelProps) => {
  if (!solved && !failed) return null;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "ANIHUNTER",
          text: shareText,
        });
      } catch (err) {
        // User cancelled or error
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText);
    alert("Result copied to clipboard!");
  };

  return (
    <MangaPanel thick className="animate-panel-slide">
      <div className="halftone-light">
        <div className="p-8 md:p-12 text-center relative">
          {solved ? (
            <>
              <h2 className="manga-title text-4xl md:text-6xl mb-4">
                VICTORY!
              </h2>
              <p className="font-body text-lg md:text-xl mb-2">
                Got it in <span className="font-bold">{guessCount}</span> {guessCount === 1 ? "try" : "tries"}!
              </p>
              {streakMessage && (
                <p className="font-body text-lg text-muted-foreground mb-8">
                  {streakMessage}
                </p>
              )}
            </>
          ) : (
            <>
              <h2 className="manga-title text-4xl md:text-6xl mb-4">
                DEFEAT
              </h2>
              <p className="font-body text-lg md:text-xl mb-2">
                The answer was right there... Come back tomorrow.
              </p>
              {streakMessage && (
                <p className="font-body text-lg text-muted-foreground mb-8">
                  {streakMessage}
                </p>
              )}
            </>
          )}

          <button
            onClick={handleShare}
            className="manga-button-filled inline-flex items-center gap-3"
          >
            <Share2 size={20} />
            SHARE YOUR RESULT
          </button>

          <div className="mt-8 p-4 border-2 border-foreground bg-background">
            <pre className="font-body text-sm text-left whitespace-pre-wrap">
              {shareText}
            </pre>
          </div>
        </div>
      </div>
    </MangaPanel>
  );
};
