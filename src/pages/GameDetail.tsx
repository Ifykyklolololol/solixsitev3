import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Download, Star, Users, Shield, Zap, CheckCircle, Crown, FlaskConical } from 'lucide-react';
import { games } from '@/data/games';
import { gameFeatures } from '@/data/gameFeatures';
import Navigation from '@/components/Navigation';
import GalaxyBackground from '@/components/GalaxyBackground';
import * as Icons from 'lucide-react';

const GameDetail = () => {
  const { slug } = useParams();
  const game = games.find(g => g.slug === slug);
  const features = gameFeatures[slug || ''] || [];

  if (!game) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <GalaxyBackground />
        <Navigation />
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
          <Link to="/scripts">
            <Button variant="gaming">Back to Scripts</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = () => {
    switch (game.status) {
      case 'active': return 'bg-primary text-primary-foreground';
      case 'beta': return 'bg-accent text-accent-foreground';
      case 'coming-soon': return 'bg-muted text-muted-foreground';
      default: return 'bg-primary text-primary-foreground';
    }
  };

  const getStatusText = () => {
    switch (game.status) {
      case 'active': return 'Available Now';
      case 'beta': return 'Beta Version';
      case 'coming-soon': return 'Coming Soon';
      default: return 'Available';
    }
  };

  const getFeatureStatusIcon = (status: string) => {
    switch (status) {
      case 'available': return <CheckCircle className="w-4 h-4 text-primary" />;
      case 'premium': return <Crown className="w-4 h-4 text-accent" />;
      case 'beta': return <FlaskConical className="w-4 h-4 text-muted-foreground" />;
      default: return <CheckCircle className="w-4 h-4 text-primary" />;
    }
  };

  const getFeatureStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Free';
      case 'premium': return 'Premium';
      case 'beta': return 'Beta';
      default: return 'Free';
    }
  };

  const getFeatureStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-primary/10 text-primary';
      case 'premium': return 'bg-accent/10 text-accent';
      case 'beta': return 'bg-muted/30 text-muted-foreground';
      default: return 'bg-primary/10 text-primary';
    }
  };

  return (
    <div className="min-h-screen">
      <GalaxyBackground />
      <Navigation />
      
      <main className="pt-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="hover-glow">
              <Link to="/scripts">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Scripts
              </Link>
            </Button>
          </div>

          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <img 
                src={game.image} 
                alt={game.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl glass-card"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-4xl md:text-5xl font-bold gaming-text">{game.title}</h1>
                  <Badge className={getStatusColor()}>
                    {getStatusText()}
                  </Badge>
                </div>
                
                <p className="text-xl text-muted-foreground mb-4">{game.description}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{game.users} users</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < game.popularity ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  
                  <Badge variant="outline" className="capitalize">
                    {game.category}
                  </Badge>
                </div>
              </div>

              {/* Download Section */}
              <div className="space-y-4">
                <Button 
                  variant="gaming" 
                  size="lg" 
                  className="w-full"
                  disabled={game.status === 'coming-soon'}
                  asChild={game.status === 'active'}
                >
                  {game.status === 'active' ? (
                    <Link to="/loader">
                      <Download className="w-5 h-5 mr-2" />
                      Get Script Now
                    </Link>
                  ) : game.status === 'beta' ? (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Join Beta Program
                    </>
                  ) : (
                    'Coming Soon'
                  )}
                </Button>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Shield className="w-4 h-4 mr-2" />
                    Safe & Secure
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Zap className="w-4 h-4 mr-2" />
                    Auto-Updates
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Features Tabs Section */}
          {features.length > 0 && (
            <Card className="glass-card border-primary/20 mb-12">
              <CardHeader>
                <CardTitle className="text-3xl gaming-text flex items-center">
                  <Zap className="w-8 h-8 mr-3 text-primary" />
                  Script Features
                </CardTitle>
                <CardDescription className="text-lg">
                  Explore all the powerful features available in {game.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue={features[0]?.name.toLowerCase().replace(/[^a-z0-9]/g, '-')} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-card/30">
                    {features.map((category, index) => {
                      const IconComponent = (Icons as any)[category.icon] || Zap;
                      return (
                        <TabsTrigger 
                          key={index}
                          value={category.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                          className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          <IconComponent className="w-4 h-4" />
                          <span className="hidden sm:inline">{category.name}</span>
                        </TabsTrigger>
                      );
                    })}
                  </TabsList>

                  {features.map((category, categoryIndex) => (
                    <TabsContent 
                      key={categoryIndex}
                      value={category.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="glass-card p-4 rounded-lg border border-primary/10 hover-glow"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                {getFeatureStatusIcon(feature.status)}
                                <h4 className="font-semibold text-lg">{feature.name}</h4>
                              </div>
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${getFeatureStatusColor(feature.status)}`}
                              >
                                {getFeatureStatusText(feature.status)}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          )}

          {/* Safety & Installation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl gaming-text flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-accent" />
                  Safety & Security
                </CardTitle>
                <CardDescription>
                  How we keep your account safe while using our scripts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Anti-Detection System</h4>
                    <p className="text-sm text-muted-foreground">Advanced protection against game detection systems</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Regular Updates</h4>
                    <p className="text-sm text-muted-foreground">Constantly updated to work with game patches</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Clean Code</h4>
                    <p className="text-sm text-muted-foreground">No malicious code, virus-free guaranteed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl gaming-text">Installation Guide</CardTitle>
                <CardDescription>
                  Step-by-step instructions to get {game.title} script running
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Badge variant="outline" className="min-w-[24px] h-6 flex items-center justify-center p-0 text-xs">1</Badge>
                    <span>Copy the SolixHub loader script</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline" className="min-w-[24px] h-6 flex items-center justify-center p-0 text-xs">2</Badge>
                    <span>Launch {game.title} and join a server</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline" className="min-w-[24px] h-6 flex items-center justify-center p-0 text-xs">3</Badge>
                    <span>Open your executor and paste the script</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline" className="min-w-[24px] h-6 flex items-center justify-center p-0 text-xs">4</Badge>
                    <span>Execute and wait for the SolixHub GUI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline" className="min-w-[24px] h-6 flex items-center justify-center p-0 text-xs">5</Badge>
                    <span>Select {game.title} and configure features</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Warning */}
          <div className="p-6 bg-destructive/10 border border-destructive/30 rounded-lg mb-8">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-destructive mb-1">Important Disclaimer</h4>
                <p className="text-sm text-muted-foreground">
                  Use this script responsibly and at your own risk. We recommend using alternate accounts and following all game rules. 
                  SolixHub is not responsible for any account actions taken by Roblox.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GameDetail;