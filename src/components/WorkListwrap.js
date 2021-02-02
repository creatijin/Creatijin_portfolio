import React from "react";


const WorkList = ({img, worktitle, worktxt, workcontant, stack}) => {
  return (
    <>
      <div className="workListwrap">
        <div className="work_title work_lists">
          <div className="work_logo"><img src={img} alt="cangyunlogo" /></div>
          <h4>{worktitle}</h4>
          <p>{worktxt}</p>
        </div>
        <div className="work_contant work_lists">
          <h4>Work</h4>
          <p>
            {workcontant}
          </p>
          <h4>Tech Stack</h4>
          <p>
            {stack}
          </p>
        </div>
      </div>
    </>
  )
}

export default WorkList;