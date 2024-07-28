
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const handleAddFeedback = () => {
    navigate('/add-feedback'); 
  };

  return (
    <header className="bg-primary text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold">6 Suggestions</h1>
          <p className="text-sm font-medium">
            <span className="font-light">Sort by :</span> Most Upvotes
          </p>
        </div>
        <button
          onClick={handleAddFeedback}
          className="py-2 px-4 bg-[#AD1FEA] text-white rounded-lg font-semibold hover:bg-[#9c1cd1] transition-all"
        >
          + Add Feedback
        </button>
      </div>
    </header>
  );
};
