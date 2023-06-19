import "./JobCard.css"
import JobInfo from "./jobs/JobInfo"

export default function JobCard({ jobName, photo, custonClass, colorBgSet }) {
    return (
        <div className={`${'job-card'} ${custonClass} ${colorBgSet}`}>
            <div className="job-poster">
                <img src={photo} alt="job_photo"/>
            </div>
            <div className="job-details">
                <h1 className="job-name">{jobName}</h1>
                <div className="infoBx">
                    <JobInfo jobInfo={jobName}/>
                </div>
            </div>
        </div>
    )
}