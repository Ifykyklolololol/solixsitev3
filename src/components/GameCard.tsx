import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  popularity: number;
  users: string;
  features: string[];
  slug: string;
  status: 'active' | 'beta' | 'coming-soon';
}

const GameCard = ({ title, description, image, popularity, users, features, slug, status }: GameCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'active': return 'bg-primary text-primary-foreground';
      case 'beta': return 'bg-accent text-accent-foreground';
      case 'coming-soon': return 'bg-muted text-muted-foreground';
      default: return 'bg-primary text-primary-foreground';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'active': return 'Available';
      case 'beta': return 'Beta';
      case 'coming-soon': return 'Coming Soon';
      default: return 'Available';
    }
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden hover-glow group">
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Status Badge */}
        <Badge className={`absolute top-4 right-4 ${getStatusColor()}`}>
          {getStatusText()}
        </Badge>
        
        {/* Popularity Stars */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < popularity ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 gaming-text">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        {/* Users Count */}
        <div className="flex items-center space-x-2 mb-4 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>{users} active users</span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
          {features.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{features.length - 3} more
            </Badge>
          )}
        </div>

        {/* Action Button */}
        <Button 
          variant={status === 'active' ? 'gaming' : 'outline'} 
          className="w-full" 
          disabled={status === 'coming-soon'}
          asChild={status !== 'coming-soon'}
        >
          {status === 'active' ? (
            <Link to={`/scripts/${slug}`}>
              <Download className="w-4 h-4 mr-2" />
              View Details
            </Link>
          ) : status === 'beta' ? (
            <Link to={`/scripts/${slug}`}>
              <Download className="w-4 h-4 mr-2" />
              View Beta
            </Link>
          ) : (
            'Coming Soon'
          )}
        </Button>
      </div>
    </div>
  );
};

export default GameCard;