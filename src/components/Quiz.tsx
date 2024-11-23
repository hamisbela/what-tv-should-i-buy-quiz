import React, { useState } from 'react';
import { ArrowRight, Monitor, DollarSign, Gamepad, Film, Timer, Sun } from 'lucide-react';
import { recommendTV, budgetRanges } from '../data/tvData';

interface QuizStep {
  question: string;
  type: 'single' | 'multiple';
  options: { value: string; label: string; icon?: React.ReactNode }[];
}

const steps: QuizStep[] = [
  {
    question: "What's your budget range?",
    type: 'single',
    options: [
      { value: 'budget', label: 'Budget-Friendly (Under $800)', icon: <DollarSign size={24} /> },
      { value: 'midRange', label: 'Mid-Range ($801-$1500)', icon: <DollarSign size={24} /> },
      { value: 'premium', label: 'Premium ($1501-$3000)', icon: <DollarSign size={24} /> },
      { value: 'luxury', label: 'Luxury ($3000+)', icon: <DollarSign size={24} /> }
    ]
  },
  {
    question: 'What size TV are you looking for?',
    type: 'single',
    options: [
      { value: '43', label: '43"', icon: <Monitor size={24} /> },
      { value: '55', label: '55"', icon: <Monitor size={24} /> },
      { value: '65', label: '65"', icon: <Monitor size={24} /> },
      { value: '75', label: '75"+', icon: <Monitor size={24} /> }
    ]
  },
  {
    question: 'What will you primarily use the TV for?',
    type: 'multiple',
    options: [
      { value: 'gaming', label: 'Gaming', icon: <Gamepad size={24} /> },
      { value: 'movies', label: 'Movies', icon: <Film size={24} /> },
      { value: 'sports', label: 'Sports', icon: <Timer size={24} /> }
    ]
  },
  {
    question: 'How bright is your viewing room?',
    type: 'single',
    options: [
      { value: 'dark-room', label: 'Dark Room', icon: <Sun size={24} className="opacity-30" /> },
      { value: 'mixed', label: 'Mixed Lighting', icon: <Sun size={24} className="opacity-60" /> },
      { value: 'bright-room', label: 'Bright Room', icon: <Sun size={24} /> }
    ]
  }
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    budget: '',
    size: '',
    usage: [] as string[],
    brightness: ''
  });
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers };
    if (steps[currentStep].type === 'multiple') {
      if (!newAnswers.usage.includes(value)) {
        newAnswers.usage = [...newAnswers.usage, value];
      } else {
        newAnswers.usage = newAnswers.usage.filter(v => v !== value);
      }
    } else if (steps[currentStep].question.includes('budget')) {
      newAnswers.budget = value;
    } else if (steps[currentStep].question.includes('size')) {
      newAnswers.size = value;
    } else if (steps[currentStep].question.includes('bright')) {
      newAnswers.brightness = value;
    }
    
    setAnswers(newAnswers);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const recommendations = showResults ? 
    recommendTV(
      answers.budget as keyof typeof budgetRanges,
      parseInt(answers.size),
      answers.usage,
      answers.brightness as 'dark-room' | 'bright-room' | 'mixed'
    ) : [];

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Your Perfect TV Matches</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {recommendations.map(tv => (
            <div key={tv.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <img src={tv.imageUrl} alt={tv.model} className="w-full h-48 object-cover" />
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{tv.model}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ {tv.size}" Display</p>
                  <p>✓ {tv.resolution} Resolution</p>
                  <p>✓ {tv.refreshRate}Hz Refresh Rate</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tv.bestFor.map(feature => (
                    <span key={feature} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-600">{tv.description}</p>
              </div>
              <div className="p-6 pt-0">
                <a
                  href={tv.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg"
                >
                  Check Price on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            setShowResults(false);
            setCurrentStep(0);
            setAnswers({ budget: '', size: '', usage: [], brightness: '' });
          }}
          className="mt-8 mx-auto block px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 mx-1 rounded-full ${
                index <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-gray-600 text-center">
          Step {currentStep + 1} of {steps.length}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">{steps[currentStep].question}</h2>

        <div className="grid grid-cols-2 gap-4">
          {steps[currentStep].options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={`p-4 rounded-lg border-2 transition-all ${
                steps[currentStep].type === 'multiple'
                  ? answers.usage.includes(option.value)
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                  : answers[currentStep === 0 ? 'budget' : currentStep === 1 ? 'size' : 'brightness'] === option.value
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                {option.icon}
                <span className="font-medium">{option.label}</span>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={nextStep}
          disabled={
            (currentStep === 0 && !answers.budget) ||
            (currentStep === 1 && !answers.size) ||
            (currentStep === 2 && answers.usage.length === 0) ||
            (currentStep === 3 && !answers.brightness)
          }
          className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {currentStep === steps.length - 1 ? 'See Recommendations' : 'Next'}
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}