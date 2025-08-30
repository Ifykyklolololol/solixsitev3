import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Star, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center">
        <div className="animate-slide-up">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/src/assets/solix-logo-alt.png" 
              alt="SolixHub" 
              className="h-32 md:h-48 w-auto hover-glow rounded-2xl"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gaming-text">
            SolixHub
          </h1>
          
          <div className="flex items-center justify-center mb-6">
            <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2 animate-glow-pulse">
              🎉 100% FREE FOREVER 🎉
            </Badge>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The ultimate <span className="text-primary font-semibold">FREE</span> Roblox script hub supporting 
            <span className="text-primary font-semibold"> Blox Fruits</span>, 
            <span className="text-accent font-semibold"> Hunt: Showdown</span>, 
            <span className="text-primary-glow font-semibold"> 99 Nights In The Forest</span> 
            and many more games - <span className="text-accent font-bold">NO PAYMENT REQUIRED!</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="glass-card px-6 py-4 rounded-xl">
              <div className="flex items-center space-x-2 text-primary">
                <Users className="w-5 h-5" />
                <span className="font-bold text-lg">50K+</span>
              </div>
              <p className="text-sm text-muted-foreground">Happy Users</p>
            </div>
            
            <div className="glass-card px-6 py-4 rounded-xl">
              <div className="flex items-center space-x-2 text-accent">
                <Zap className="w-5 h-5" />
                <span className="font-bold text-lg">20+</span>
              </div>
              <p className="text-sm text-muted-foreground">Free Games</p>
            </div>
            
            <div className="glass-card px-6 py-4 rounded-xl animate-glow-pulse border-2 border-primary/30">
              <div className="flex items-center space-x-2 text-primary-glow">
                <Star className="w-5 h-5" />
                <span className="font-bold text-lg">$0</span>
              </div>
              <p className="text-sm text-muted-foreground font-semibold">Always FREE!</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="gaming" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/loader">
                <Download className="w-5 h-5 mr-2" />
                Get FREE Loader
              </Link>
            </Button>
            
            <Button variant="galaxy" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/scripts">
                Browse FREE Scripts
              </Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-xl hover-glow">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Lightning Fast & FREE</h3>
              <p className="text-muted-foreground">
                Optimized scripts that load instantly without lag, delays, or any costs
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl hover-glow">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Star className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-accent">Premium Quality - $0</h3>
              <p className="text-muted-foreground">
                Hand-crafted scripts with regular updates and new features, completely free
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl hover-glow">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-glow">Free Community</h3>
              <p className="text-muted-foreground">
                Join thousands of users and get FREE support 24/7 - no subscriptions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;