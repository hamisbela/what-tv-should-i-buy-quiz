import React from 'react';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">What TV Should I Buy? - Quiz</h1>
        <Quiz />
      </section>

      <section id="guide" className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose lg:prose-lg mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-8">What TV Should I Buy? - Quiz</h2>
          <p className="text-lg">
            If you're wondering, <strong>"What TV should I buy?"</strong>, you're not alone! Choosing the perfect TV can be overwhelming with so many options available.
            From OLEDs to QLEDs, screen sizes to smart features, finding the best TV for your needs requires some careful consideration. But don't worry – we've got you covered! Our interactive <strong>What TV Should I Buy? Quiz</strong> will help you narrow down your choices and find the ideal TV for your home.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">Why Take the "What TV Should I Buy?" Quiz?</h2>
          <p>
            With so many TVs on the market, deciding on the right one can feel like a daunting task. Whether you're a movie buff, a sports enthusiast, or a casual viewer, our <strong>What TV Should I Buy? Quiz</strong> is designed to match you with a TV that fits your lifestyle, budget, and preferences.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">Key Features Our Quiz Considers</h2>
          <ul className="space-y-2">
            <li><strong>Screen Size:</strong> Big or small, find the perfect TV size for your space.</li>
            <li><strong>Picture Quality:</strong> Learn if OLED, QLED, or LED is best for you.</li>
            <li><strong>Smart Features:</strong> Whether you need a smart TV with apps or a basic one, we've got options.</li>
            <li><strong>Budget:</strong> Our quiz works within your price range to find TVs you'll love.</li>
            <li><strong>Use Case:</strong> Gaming, streaming, or regular TV watching? Get tailored results.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-8 mb-4">Popular Choices from the "What TV Should I Buy?" Quiz</h2>
          <p>Based on our quiz results, here are some top picks to get you started:</p>
          <ul className="space-y-2">
            <li><strong>Best for Gamers:</strong> TVs with low input lag and high refresh rates.</li>
            <li><strong>Best for Movie Lovers:</strong> OLED TVs with stunning black levels and vibrant colors.</li>
            <li><strong>Best Budget Option:</strong> Affordable TVs with solid features for everyday use.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-8 mb-4">How the "What TV Should I Buy?" Quiz Works</h2>
          <p>Taking the quiz is quick and easy! Simply answer a few questions about your viewing habits, preferred features, and budget, and we'll recommend the best TVs for you.</p>
          <p>Start the quiz now and discover your ideal TV!</p>

          <h2 className="text-3xl font-bold mt-8 mb-4">Expert Tips on What TV to Buy</h2>
          <p>While our <strong>What TV Should I Buy? Quiz</strong> is a fantastic tool, here are some general tips to help you:</p>
          <ul className="space-y-2">
            <li><strong>Measure Your Space:</strong> Ensure the TV will fit comfortably in your room.</li>
            <li><strong>Consider Resolution:</strong> 4K TVs are the standard, but 8K TVs are emerging.</li>
            <li><strong>Think About Audio:</strong> Soundbars or home theater systems may enhance your experience.</li>
            <li><strong>Read Reviews:</strong> Check what other buyers say about the TV you're considering.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-8 mb-4">Why Choose Us for Your TV Buying Guide?</h2>
          <p>
            Our team of experts has scoured the market to provide the most accurate and up-to-date recommendations in the <strong>What TV Should I Buy? Quiz</strong>. We're here to simplify your decision and ensure you get the most bang for your buck.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">Don't Wait – Take the "What TV Should I Buy?" Quiz Today!</h2>
          <p>
            Ready to find your dream TV? Don't waste hours researching – let our <strong>What TV Should I Buy? Quiz</strong> do the hard work for you. Whether you're shopping for a TV upgrade or buying your first one, our quiz will make the process effortless.
          </p>
          <p>
            Start the What TV Should I Buy? Quiz now and bring home the perfect TV!
          </p>
        </article>
      </section>
    </div>
  );
}