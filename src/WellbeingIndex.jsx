import React, { useState, useEffect } from 'react';

function App() {
  const [scores, setScores] = useState({
    WHO1: null,
    WHO2: null,
    WHO3: null,
    WHO4: null,
    WHO5: null,
  });

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [percentageScore, setPercentageScore] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setScores({
      ...scores,
      [name]: parseInt(value),
    });

    // Move to the next question after selecting an answer
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    const percentage = (total / 25) * 100; // Convert total score to a percentage
    setPercentageScore(percentage); // Set the percentage score in state
  };

  useEffect(() => {
    if (percentageScore !== null) {
      // Initialize JustGage when the percentage is calculated
      if (window.JustGage) {
        new window.JustGage({
          id: "gauge",
          value: percentageScore,
          min: 0,
          max: 100,
          title: "Well-being Score",
          levelColors: ["#F44336", "#FF9800", "#FFEB3B","#9CCC65"],
          label: "%",
          gaugeWidthScale: 0.6,
          counter: true,
        });
      }
    }
  }, [percentageScore]);

  return (
    <div className="App">
      <h1>Well-being Check</h1>
      <h2>Dalam seminggu terakhir:</h2>
      <form onSubmit={handleSubmit}>
        {currentQuestion >= 1 && (
          <div>
            {/* <h3>I have felt cheerful in good spirits</h3> */}
            <h3>Saya merasa ceria dan bersemangat</h3>
            <label><input type="radio" name="WHO1" value="5" onChange={handleChange} /> Sepanjang waktu</label>
            <label><input type="radio" name="WHO1" value="4" onChange={handleChange} /> Sebagian besar waktu</label>
            <label><input type="radio" name="WHO1" value="3" onChange={handleChange} /> Lebih dari separuh waktu</label>
            <label><input type="radio" name="WHO1" value="2" onChange={handleChange} /> Kurang dari separuh waktu</label>
            <label><input type="radio" name="WHO1" value="1" onChange={handleChange} /> Kadang-kadang</label>
            <label><input type="radio" name="WHO1" value="0" onChange={handleChange} /> Tidak pernah</label>
          </div>
        )}

        {currentQuestion >= 2 && (
          <div>
            {/* <h3>I have felt calm and relaxed</h3> */}
            <h3>Saya merasa tenang dan rileks</h3>
            <label><input type="radio" name="WHO2" value="5" onChange={handleChange} /> Sepanjang waktu</label>
            <label><input type="radio" name="WHO2" value="4" onChange={handleChange} /> Sebagian besar waktu</label>
            <label><input type="radio" name="WHO2" value="3" onChange={handleChange} /> Lebih dari separuh waktu</label>
            <label><input type="radio" name="WHO2" value="2" onChange={handleChange} /> Kurang dari separuh waktu</label>
            <label><input type="radio" name="WHO2" value="1" onChange={handleChange} /> Kadang-kadang</label>
            <label><input type="radio" name="WHO2" value="0" onChange={handleChange} /> Tidak pernah</label>
          </div>
        )}

        {currentQuestion >= 3 && (
          <div>
            {/* <h3>I have felt active and vigorous</h3> */}
            <h3>Saya merasa aktif dan berenergi tinggi</h3>
            <label><input type="radio" name="WHO3" value="5" onChange={handleChange} /> Sepanjang waktu</label>
            <label><input type="radio" name="WHO3" value="4" onChange={handleChange} /> Sebagian besar waktu</label>
            <label><input type="radio" name="WHO3" value="3" onChange={handleChange} /> Lebih dari separuh waktu</label>
            <label><input type="radio" name="WHO3" value="2" onChange={handleChange} /> Kurang dari separuh waktu</label>
            <label><input type="radio" name="WHO3" value="1" onChange={handleChange} /> Kadang-kadang</label>
            <label><input type="radio" name="WHO3" value="0" onChange={handleChange} /> Tidak pernah</label>
          </div>
        )}

        {currentQuestion >= 4 && (
          <div>
            {/* <h3>I woke up feeling fresh and rested</h3> */}
            <h3>Saya bangun dengan perasaan segar dan istirahat cukup</h3>
            <label><input type="radio" name="WHO4" value="5" onChange={handleChange} /> Sepanjang waktu</label>
            <label><input type="radio" name="WHO4" value="4" onChange={handleChange} /> Sebagian besar waktu</label>
            <label><input type="radio" name="WHO4" value="3" onChange={handleChange} /> Lebih dari separuh waktu</label>
            <label><input type="radio" name="WHO4" value="2" onChange={handleChange} /> Kurang dari separuh waktu</label>
            <label><input type="radio" name="WHO4" value="1" onChange={handleChange} /> Kadang-kadang</label>
            <label><input type="radio" name="WHO4" value="0" onChange={handleChange} /> Tidak pernah</label>
          </div>
        )}

        {currentQuestion >= 5 && (
          <div>
            {/* <h3>My daily life has been filled with things that interest me</h3> */}
            <h3>Kehidupan sehari-hari saya dipenuhi dengan hal-hal yang menarik minat saya</h3>
            <label><input type="radio" name="WHO5" value="5" onChange={handleChange} /> Sepanjang waktu</label>
            <label><input type="radio" name="WHO5" value="4" onChange={handleChange} /> Sebagian besar waktu</label>
            <label><input type="radio" name="WHO5" value="3" onChange={handleChange} /> Lebih dari separuh waktu</label>
            <label><input type="radio" name="WHO5" value="2" onChange={handleChange} /> Kurang dari separuh waktu</label>
            <label><input type="radio" name="WHO5" value="1" onChange={handleChange} /> Kadang-kadang</label>
            <label><input type="radio" name="WHO5" value="0" onChange={handleChange} /> Tidak pernah</label>
          </div>
        )}

        {currentQuestion > 5 && (
          <button class="button-85" type="submit">LIHAT HASIL</button>
        )}
      </form>

      {/* Gauge container */}
      {percentageScore !== null && (
        <div id="gauge" class="score"></div>
      )}
    </div>
  );
}

export default App;
