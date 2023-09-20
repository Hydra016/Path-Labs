import React from "react";
import Image from "next/image";

const Schedule = () => {
  return (
    <div className="schedule-container">
      <div className="schedule-img-container">
        <Image src="/schedule.png" width={650} height={400} />
      </div>
      <div className="schedule-content">
        <div>
          <p className="test-text-top">Make a schedule</p>
          <p className="findtest-heading">
            Make a schedule in advance with the available doctor
          </p>
          <p className="findtest-text">
            Cpathlabs is a very painful process, especially if you’re not taking
            care of your health and having regular check-ups. HealhtyCarely
            makes it easier for everyone to schedule a doctor’s appointment.
          </p>
        </div>
        <div className="findtest-check">
          <Image src="/check.png" width={20} height={20} />
          <span className="findtest-check-test">
            Make a schedule online is easy.{" "}
          </span>
        </div>
        <div className="findtest-check">
          <Image src="/check.png" width={20} height={20} />
          <span className="findtest-check-test">
            Easy to connect with nearest lab
          </span>
        </div>
        <div className="findTest-btn-container">
          <button className="primary-btn">Make Schedule Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
