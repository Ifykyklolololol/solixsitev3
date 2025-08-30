import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Zap, Shield } from 'lucide-react';

const FreeNotice = () => {
  return (
    <Card className="glass-card border-primary/30 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 mb-8">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-[#FF0000]" />
              <Badge className="bg-primary text-primary-foreground text-sm px-3 py-1 animate-glow-pulse">
                100% FREE
              </Badge>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg text-primary">SolixHub - Always Free!</h3>
              <p className="text-muted-foreground text-sm">
                No payments, no subscriptions, no premium tiers - completely free forever
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Safe & Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Always Updated</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FreeNotice;