import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import GalaxyBackground from '@/components/GalaxyBackground';
import { ExternalLink, Users, Youtube, MessageCircle, Github, Twitter, Play, Heart } from 'lucide-react';
import { config } from '@/data/config';

const Social = () => {
  const socialLinks = [
    {
      name: 'Discord Server',
      description: 'Join our active community of 50,000+ members. Get support, share tips, and connect with other scripters.',
      icon: MessageCircle,
      url: config.social.discord,
      color: 'text-[#5865F2]',
      bgColor: 'bg-[#5865F2]/10',
      members: '50K+',
      type: 'Community'
    },
    {
      name: 'YouTube Channel', 
      description: 'Subscribe for tutorials, script showcases, and the latest Roblox scripting content.',
      icon: Youtube,
      url: config.social.youtube,
      color: 'text-[#FF0000]',
      bgColor: 'bg-[#FF0000]/10',
      members: '25K+',
      type: 'Educational'
    },
    {
      name: 'GitHub Repository',
      description: 'Access our open-source projects, contribute to development, and view our code.',
      icon: Github,
      url: config.social.github,
      color: 'text-foreground',
      bgColor: 'bg-muted/50',
      members: '5K+',
      type: 'Development'
    },
    {
      name: 'Twitter Updates',
      description: 'Follow for real-time updates, announcements, and community highlights.',
      icon: Twitter,
      url: config.social.twitter,
      color: 'text-[#1DA1F2]',
      bgColor: 'bg-[#1DA1F2]/10',
      members: '15K+',
      type: 'News'
    }
  ];

  const featuredVideos = [
    {
      id: '1',
      title: 'SolixHub Complete Setup Guide 2024',
      description: 'Learn how to set up SolixHub from scratch with our comprehensive tutorial.',
      thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      duration: '12:45',
      views: '150K',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: '2',
      title: 'Best Blox Fruits Script Features Showcase',
      description: 'Discover all the amazing features in our Blox Fruits script.',
      thumbnail: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
      duration: '8:30',
      views: '200K',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: '3',
      title: 'Safety Guide: Protecting Your Roblox Account',
      description: 'Essential tips to keep your account safe while using scripts.',
      thumbnail: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=300&fit=crop',
      duration: '6:15',
      views: '95K',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  ];

  return (
    <div className="min-h-screen">
      <GalaxyBackground />
      <Navigation />
      
      <main className="pt-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-primary mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold gaming-text">
                Join Our FREE Community
              </h1>
            </div>
            <Badge className="mb-6 bg-primary text-primary-foreground text-lg px-6 py-3 animate-glow-pulse">
              🎉 100% FREE - NO PAYMENTS EVER! 🎉
            </Badge>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with thousands of Roblox players worldwide for <span className="text-primary font-bold">completely FREE</span>. 
              Get support, share experiences, and stay updated with the latest SolixHub content.
              <span className="block mt-2 text-accent font-semibold">No subscriptions, no premium tiers, no hidden costs!</span>
            </p>
          </div>

          {/* Community Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="glass-card px-6 py-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary">90K+</div>
              <div className="text-sm text-muted-foreground">FREE Members</div>
            </div>
            <div className="glass-card px-6 py-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">FREE Support</div>
            </div>
            <div className="glass-card px-6 py-4 rounded-xl text-center animate-glow-pulse border-2 border-primary/30">
              <div className="text-3xl font-bold text-primary-glow">$0</div>
              <div className="text-sm text-muted-foreground font-semibold">ALWAYS FREE</div>
            </div>
          </div>

          {/* Social Links */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center gaming-text">
              Connect With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                
                return (
                  <Card key={index} className="glass-card hover-glow group border-primary/20 overflow-hidden">
                    <CardHeader className={`${social.bgColor} border-b border-primary/10`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${social.bgColor}`}>
                            <Icon className={`w-6 h-6 ${social.color}`} />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{social.name}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {social.members}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {social.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      <CardDescription className="mb-4 text-base leading-relaxed">
                        {social.description}
                      </CardDescription>
                      
                      <Button 
                        variant="gaming" 
                        className="w-full"
                        onClick={() => window.open(social.url, '_blank', 'noopener,noreferrer')}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        Join Now
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Featured Videos */}
          <section className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Youtube className="w-6 h-6 text-[#FF0000] mr-2" />
              <h2 className="text-3xl font-bold gaming-text">
                Featured Videos
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredVideos.map((video) => (
                <Card key={video.id} className="glass-card hover-glow group border-primary/20 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <div className="w-16 h-16 bg-[#FF0000]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    
                    {/* Video Info */}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                    
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.views} views
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {video.description}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open(video.url, '_blank', 'noopener,noreferrer')}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Video
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mb-16">
            <Card className="glass-card border-primary/20 p-8">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-[#FF0000] mr-2" />
                <h2 className="text-3xl font-bold gaming-text">
                  SolixHub is 100% FREE!
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                SolixHub will <span className="text-primary font-bold">ALWAYS</span> be completely free thanks to our amazing community. 
                <span className="text-accent font-bold">No payments, no subscriptions, no premium features!</span> 
                Help us grow by sharing with friends and subscribing to our free content.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gaming" size="lg">
                  <Youtube className="w-5 h-5 mr-2" />
                  Subscribe FREE
                </Button>
                <Button variant="neon" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join FREE Discord
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Social;