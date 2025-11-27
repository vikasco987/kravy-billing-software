"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Download, ImageDown, Image as ImageIcon, Loader2 } from "lucide-react";

export default function DownloadDropdown({
  title = "Image",
  withWatermarkUrl,
  withoutWatermarkUrl,
}) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async (url, fileName) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          disabled={loading}
          className="flex items-center justify-center gap-2 rounded-full bg-gray-800 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Download className="w-5 h-5" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-60 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-2 animate-slide-down"
      >
        <DropdownMenuItem
          onClick={() => handleDownload(withWatermarkUrl, `${title}.jpg`)}
          className="flex items-center gap-3 rounded-lg px-4 py-2 cursor-pointer transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900"
        >
          <ImageDown className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
            Download
          </span>
        </DropdownMenuItem>

        {withoutWatermarkUrl && (
          <a
            href={withoutWatermarkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DropdownMenuItem className="flex items-center gap-3 rounded-lg px-4 py-2 cursor-pointer transition-all duration-300 hover:bg-purple-50 dark:hover:bg-purple-900">
              <ImageIcon className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Remove Watermark
              </span>
            </DropdownMenuItem>
          </a>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
