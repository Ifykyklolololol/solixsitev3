import GalaxyBackground from '@/components/GalaxyBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import GameCard from '@/components/GameCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { games } from '@/data/games';
import { ArrowRight, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredGames = games.filter(game => game.popularity >= 4).slice(0, 6);

  return (
    <div className="relative">
      <GalaxyBackground />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Games Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-accent mr-2" />
                <h2 className="text-3xl md:text-4xl font-bold gaming-text">
                  Popular Scripts
                </h2>
                <Star className="w-6 h-6 text-accent ml-2" />
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our most popular and highly-rated scripts used by thousands of players
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredGames.map(game => (
                <GameCard key={game.id} {...game} />
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="galaxy" size="lg" asChild>
                <Link to="/scripts">
                  View All Scripts
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Community Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
              <div className="flex items-center justify-center mb-6">
                <Users className="w-16 h-16 text-primary mr-4" />
                <Badge className="bg-accent text-accent-foreground text-xl px-6 py-3 animate-glow-pulse">
                  💯 COMPLETELY FREE
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gaming-text">
                Join Our FREE Community
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with thousands of Roblox players for <span className="text-primary font-bold">FREE</span>. 
                Get support, share tips, and access all scripts without paying a single cent. 
                <span className="text-accent font-bold">No hidden fees, no subscriptions, no premium tiers!</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gaming" size="lg" asChild>
                  <Link to="/social">
                    Join FREE Discord
                  </Link>
                </Button>
                
                <Button variant="neon" size="lg" asChild>
                  <Link to="/tutorials">
                    FREE Tutorials
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
