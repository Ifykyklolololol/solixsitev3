import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import GalaxyBackground from '@/components/GalaxyBackground';
import { tutorials } from '@/data/tutorials';
import { Search, Play, Clock, Filter, BookOpen, Star } from 'lucide-react';

const Tutorials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = ['all', ...new Set(tutorials.map(tutorial => tutorial.category))];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || tutorial.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-primary text-primary-foreground';
      case 'intermediate': return 'bg-accent text-accent-foreground';
      case 'advanced': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen">
      <GalaxyBackground />
      <Navigation />
      
      <main className="pt-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-primary mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold gaming-text">
                SolixHub Tutorials
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master Roblox scripting with our comprehensive video tutorials. 
              Learn bypasses, key generation, configuration, and advanced techniques.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="glass-card px-6 py-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary">{tutorials.length}</div>
              <div className="text-sm text-muted-foreground">Tutorials</div>
            </div>
            <div className="glass-card px-6 py-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-accent">{categories.length - 1}</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="glass-card px-6 py-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary-glow">Free</div>
              <div className="text-sm text-muted-foreground">All Content</div>
            </div>
          </div>

          {/* Filters */}
          <div className="glass-card p-6 rounded-xl mb-8">
            <div className="flex items-center mb-4">
              <Filter className="w-5 h-5 text-primary mr-2" />
              <h3 className="text-lg font-semibold">Filter Tutorials</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'gaming' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </Button>
                ))}
              </div>

              {/* Difficulty Filter */}
              <div className="flex flex-wrap gap-2">
                {difficulties.map(difficulty => (
                  <Button
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? 'gaming' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className="capitalize"
                  >
                    {difficulty === 'all' ? 'All Levels' : difficulty}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Tutorials */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Star className="w-6 h-6 text-accent mr-2" />
              <h2 className="text-2xl font-bold text-primary">Featured Tutorials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.slice(0, 3).map(tutorial => (
                <TutorialCard key={tutorial.id} tutorial={tutorial} featured />
              ))}
            </div>
          </section>

          {/* All Tutorials */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                All Tutorials
                <Badge variant="outline" className="ml-2">
                  {filteredTutorials.length} videos
                </Badge>
              </h2>
            </div>

            {filteredTutorials.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTutorials.map(tutorial => (
                  <TutorialCard key={tutorial.id} tutorial={tutorial} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No tutorials found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

const TutorialCard = ({ tutorial, featured = false }: { tutorial: any; featured?: boolean }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-primary text-primary-foreground';
      case 'intermediate': return 'bg-accent text-accent-foreground';
      case 'advanced': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className={`glass-card hover-glow group overflow-hidden ${featured ? 'border-primary/40' : 'border-primary/20'}`}>
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={tutorial.thumbnail} 
          alt={tutorial.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Play className="w-8 h-8 text-primary-foreground ml-1" />
          </div>
        </div>
        
        {/* Duration */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-sm">
          <Clock className="w-3 h-3" />
          {tutorial.duration}
        </div>
        
        {/* Difficulty Badge */}
        <Badge className={`absolute top-4 left-4 ${getDifficultyColor(tutorial.difficulty)}`}>
          {tutorial.difficulty}
        </Badge>
        
        {featured && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
      </div>

      {/* Content */}
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
            {tutorial.title}
          </CardTitle>
        </div>
        <CardDescription className="line-clamp-2">
          {tutorial.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tutorial.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Button */}
        <Button variant="gaming" className="w-full" onClick={() => {
          window.open(tutorial.videoUrl, '_blank', 'noopener,noreferrer');
        }}>
          <Play className="w-4 h-4 mr-2" />
          Watch Tutorial
        </Button>
      </CardContent>
    </Card>
  );
};

export default Tutorials;