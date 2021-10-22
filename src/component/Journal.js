import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Journal.css";

const Journal = () => {
  const [journal, setJournal] = useState([]);
  const getJournal = async () => {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );
    setJournal(response.data);
  };
  useEffect(() => {
    getJournal();
  }, []);
  return (
    <>
      <div className="new-section">
        {journal &&
          journal.map((cval) => {
            return (
              <>
                <div className="second-section">
                  <div className="second-img">
                    <img
                      className="section-img"
                      src="http://www.madepublishers.com/assets/bulkUpload/_resampled/CroppedImageWzcyOSw0ODld-07-Nourished-ED04-Cover2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="second-info">
                    <div className="title">{cval.title}</div>
                    <div className="body">{cval.body}</div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Journal;
