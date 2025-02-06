import React from 'react';
import { Heart, Users, Target } from 'lucide-react';

const CharityPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Charities</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Example charity cards */}
        <CharityCard
          name="Save the Children"
          description="Helping children in need worldwide"
          image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
          raised={150000}
          goal={200000}
          supporters={1234}
        />
        <CharityCard
          name="Ocean Cleanup"
          description="Removing plastic from our oceans"
          image="https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
          raised={75000}
          goal={100000}
          supporters={856}
        />
        <CharityCard
          name="Rainforest Alliance"
          description="Protecting rainforests and wildlife"
          image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
          raised={95000}
          goal={150000}
          supporters={678}
        />
      </div>
    </div>
  );
};

interface CharityCardProps {
  name: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
  supporters: number;
}

const CharityCard = ({ name, description, image, raised, goal, supporters }: CharityCardProps) => {
  const progress = (raised / goal) * 100;

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Raised: ${raised.toLocaleString()}</span>
              <span>Goal: ${goal.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-rose-500 rounded-full h-2"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{supporters} supporters</span>
            </div>
            <button className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharityPage;