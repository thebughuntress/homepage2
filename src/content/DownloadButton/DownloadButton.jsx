import React from "react";
import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const DownloadButton = ({ label, downloadFileName, url, fallbackFile }) => {
  const handleDownload = async () => {
    if (!url) {
      console.warn("URL is missing. Attempting to download fallback file...");
      downloadFallback();
      return;
    }

    try {
      // Fetch the file from the specified URL
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Download from ${url} failed...`);
      }

      // Create a blob from the response and trigger the download
      const blob = await response.blob();
      triggerDownload(blob, downloadFileName);
    } catch (error) {
      console.warn("Download failed. Falling back...", error);
      downloadFallback();
    }
  };

  // Helper function to trigger file download
  const triggerDownload = (blob, filename) => {
    const link = document.createElement("a");
    const objectUrl = URL.createObjectURL(blob);
    link.href = objectUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(objectUrl);
  };

  // Helper function for fallback file download
  const downloadFallback = () => {
    if (!fallbackFile) {
      console.error("No fallback file available.");
      return;
    }

    const link = document.createElement("a");
    link.href = fallbackFile;
    link.download = downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="outlined"
      size="small"
      startIcon={<FileDownloadIcon />}
      onClick={handleDownload}
      sx={{ my: 2, textTransform: "uppercase" }}
    >
      {label}
    </Button>
  );
};

export default DownloadButton;
