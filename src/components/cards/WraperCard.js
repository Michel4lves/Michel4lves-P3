import "./WraperCard.css"
import JobInfo from "./jobs/JobInfo"

export default function WraperCard({ jobName, photo }) {
    return (
        <div className="wrapper">
            <div className="card">
                <img src={photo} alt="job_photo"/>
                <div className="infoBx">
                    <h1 className="job-name">{jobName}</h1>
                    <JobInfo jobInfo={jobName}/>
                </div>
            </div>
        </div>
    )
}