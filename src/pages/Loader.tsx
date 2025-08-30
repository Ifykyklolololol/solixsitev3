import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, Download, Shield, Zap, Code } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { config } from '@/data/config';

const Loader = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const loaderScript = config.loader.script;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(loaderScript);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Loader script copied to clipboard",
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-primary">
            <Download className="w-4 h-4 mr-1" />
            Official Loader
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gaming-text">
            SolixHub Loader
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant access to all SolixHub scripts with our secure, optimized loader
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 rounded-xl text-center hover-glow">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-primary">Secure</h3>
            <p className="text-muted-foreground text-sm">
              Protected with advanced anti-detection and encryption
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl text-center hover-glow">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-accent">Lightning Fast</h3>
            <p className="text-muted-foreground text-sm">
              Instant loading with minimal resource usage
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl text-center hover-glow">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-primary-glow">Always Updated</h3>
            <p className="text-muted-foreground text-sm">
              Automatic updates with the latest script versions
            </p>
          </div>
        </div>

        {/* Main Loader Card */}
        <Card className="glass-card border-primary/20 animate-glow-pulse">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl gaming-text flex items-center justify-center gap-2">
              <Download className="w-6 h-6" />
              SolixHub Loader Script
            </CardTitle>
            <CardDescription className="text-lg">
              Copy and paste this script into your Roblox executor to get started
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="bg-card/50 border border-primary/30 rounded-lg p-4 mb-6">
              <code className="text-sm text-primary-glow break-all font-mono">
                {loaderScript}
              </code>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gaming" 
                size="lg" 
                onClick={copyToClipboard}
                className="flex-1 sm:flex-none"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 mr-2" />
                    Copy Script
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <div className="mt-12 glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center gaming-text">
            How to Use
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-primary">Step 1: Prerequisites</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• A compatible Roblox executor (Synapse X, Script-Ware, etc.)</li>
                <li>• Roblox game launched and joined</li>
                <li>• Stable internet connection</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-accent">Step 2: Execute</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Copy the loader script above</li>
                <li>• Paste it into your executor</li>
                <li>• Press Execute/Inject</li>
                <li>• Select your game from the SolixHub menu</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-8 p-6 bg-destructive/10 border border-destructive/30 rounded-lg">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-destructive mb-1">Important Notice</h4>
              <p className="text-sm text-muted-foreground">
                Only use SolixHub scripts in appropriate game modes. We are not responsible for any account actions taken by Roblox. Use at your own discretion and always follow Roblox's Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;