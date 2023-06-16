import "./BorderCard.css"
import JobInfo from "./jobs/JobInfo"

export default function BorderCard({ jobName, photo }) {
    return (
        <div className="border-card">
            <div className="cardBx1">
                <img src={photo} alt="job_photo"/>
            </div>
            <div className="cardBx2">
                <div className="infoBx">
                    <h1 className="job-name">{jobName}</h1>
                    <JobInfo jobInfo={jobName}/>
                </div>
            </div>
            <div className="cardBx3"></div>
        </div>
    )
}