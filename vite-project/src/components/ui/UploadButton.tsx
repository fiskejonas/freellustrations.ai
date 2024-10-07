import { Button } from "@/components/ui/shadcn/button";
import { Upload } from "lucide-react";
import { useState } from "react";

export default function UploadButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : null);

    if (file) {
      try {
        setUploadStatus("Uploading...");
        // Needs upload logic here. For example, using fetch:
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/upload", {
          // Replace with upload endpoint
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          setUploadStatus("Upload successful!");
        } else {
          setUploadStatus("Upload failed.");
        }
      } catch (error) {
        console.error("Upload error:", error);
        setUploadStatus("Upload error.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        variant="outline"
        className={`w-fit bg-slate-800 text-slate-100 border-slate-100 ${className}`}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        <Upload className="mr-2 h-4 w-4" />
        {children}
      </Button>
      <input
        id="fileInput"
        type="file"
        className="sr-only"
        onChange={handleFileChange}
        aria-label="File upload"
      />
      {fileName && (
        <p className="text-sm text-muted-foreground">Selected: {fileName}</p>
      )}
      {uploadStatus && (
        <p className="text-sm text-muted-foreground">{uploadStatus}</p>
      )}
    </div>
  );
}
