import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import GameCard from '@/components/GameCard';
import FreeNotice from '@/components/FreeNotice';
import { games } from '@/data/games';
import { Search, Filter, Star } from 'lucide-react';

const Scripts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const categories = ['all', ...new Set(games.map(game => game.category))];
  const statuses = ['all', 'active', 'beta', 'coming-soon'];

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || game.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const featuredGames = games.filter(game => game.popularity === 5);

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gaming-text">
            FREE Game Scripts
          </h1>
          <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-3 animate-glow-pulse">
            🎉 ALL SCRIPTS 100% FREE 🎉
          </Badge>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of <span className="text-primary font-bold">completely FREE</span> Roblox scripts for your favorite games.
            <span className="block mt-1 text-accent font-semibold">No hidden costs, no premium versions!</span>
          </p>
        </div>

        {/* Free Notice */}
        <FreeNotice />

        {/* Featured Games */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Star className="w-6 h-6 text-accent mr-2" />
            <h2 className="text-2xl font-bold text-primary">Featured Scripts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map(game => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </section>

        {/* Filters */}
        <div className="glass-card p-6 rounded-xl mb-8">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Filter Scripts</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search games..."
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

            {/* Status Filter */}
            <div className="flex flex-wrap gap-2">
              {statuses.map(status => (
                <Button
                  key={status}
                  variant={selectedStatus === status ? 'gaming' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedStatus(status)}
                  className="capitalize"
                >
                  {status === 'all' ? 'All Status' : status.replace('-', ' ')}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* All Games Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              All Scripts 
              <Badge variant="outline" className="ml-2">
                {filteredGames.length} games
              </Badge>
            </h2>
          </div>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGames.map(game => (
                <GameCard key={game.id} {...game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No scripts found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Scripts;