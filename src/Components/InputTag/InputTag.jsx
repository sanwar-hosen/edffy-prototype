import { useState } from 'react';
import { Badge } from 'flowbite-react';

export default function InputTag({ tags, onTagsChange }) {
  const [inputValue, setInputValue] = useState(''); // Current input value

  // Handle all input interactions (typing, Enter key, comma)
  const handleInput = (e) => {
    if (e.type === 'change') {
      // Update input value when typing
      setInputValue(e.target.value);
    } else if (e.type === 'keydown' && (e.key === 'Enter' || e.key === ',')) {
      // Add tag when Enter or comma is pressed
      e.preventDefault();

      const newTag = inputValue.trim();
      // Check if tag contains only special characters
      if (newTag && /[^a-zA-Z0-9\s]/.test(newTag)) {
        // Show alert if tag has only special characters
        alert("Tags cannot contain special characters");
        setInputValue(''); // Clear input
        return;
      }
      // Only add if tag is not empty and not a duplicate
      if (newTag && !tags.includes(newTag)) {
        onTagsChange([...tags, newTag]);
        setInputValue(''); // Clear input after adding
      }
    }
  };

  // Remove tag when X is clicked
  const removeTag = (tagToRemove) => {
    onTagsChange(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-full">
      <div className="flex flex-col gap-2">
        {/* Tag input container with tags inside */ }
        <div className="min-h-[42px] px-3 py-2 border border-gray rounded-lg focus-within:ring-2 focus-within:ring-[#00804E] focus-within:border-[#00804E] flex flex-wrap gap-2 items-center">
          { tags.map((tag, index) => (
            <Badge
              key={ index }
              color="outlinedPrimary"
              size='md'
              className="flex items-center cursor-default "
              
            >
              <span>
              { tag }
              </span>
              <span
                className=" ml-1 cursor-pointer hover:text-red-600 hover:font-bold"
                onClick={ () => removeTag(tag) }
              >
                ✕
              </span>
            </Badge>
          )) }

          {/* Input field - grows to fill available space */ }
          <input
            id="tag-input"
            type="text"
            value={ inputValue }
            onChange={ handleInput }
            onKeyDown={ handleInput }
            placeholder={ tags.length === 0 ? "Add Tags" : "" }
            className="flex-grow border-none focus:outline-none focus:ring-0 p-0 min-w-[120px]"
          />
        </div>

        {/* Label */ }
          <div className="text-xs text-gray">
            Press Enter or comma to add a tag
          </div>
      </div>
    </div>
  );
}