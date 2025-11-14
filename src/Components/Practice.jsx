import { useState } from "react";

function MediumForm() {
  const [selectedTools, setSelectedTools] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      // Add checked item
      setSelectedTools([...selectedTools, value]);
    } else {
      // Remove unchecked item
      setSelectedTools(selectedTools.filter((tool) => tool !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Medium/Tools:", selectedTools);

    // Optional: send to backend
    // fetch("http://localhost:5000/art", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ tools: selectedTools }),
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-xl w-80">
      <h3 className="font-bold mb-2">Select Medium/Tools</h3>

      <div className="w-full grid grid-cols-2 gap-2 ml-2">
        {[
          "Digital Tools",
          "Pencils & Charcoal",
          "Ink & Pens",
          "Painting",
          "Sculpting Materials",
          "Others",
        ].map((tool) => (
          <label key={tool} className="flex items-center gap-1">
            <input
              type="checkbox"
              value={tool}
              onChange={handleCheckboxChange}
              className="checkbox"
            />
            {tool}
          </label>
        ))}
      </div>

      <button type="submit" className="btn btn-primary mt-3 w-full">
        Submit
      </button>

      {/* To show selected items */}
      <p className="mt-2 text-sm">
        Selected: <strong>{selectedTools.join(", ") || "None"}</strong>
      </p>
    </form>
  );
}

export default MediumForm;
