'use client';

import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  open: boolean;
  videoUrl: string | null;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ open, videoUrl, onClose }) => {
  if (!open || !videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:opacity-70">
        <X size={32} />
      </button>

      {/* Video container */}
      <div className="w-[90%] max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden">
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default VideoModal;
