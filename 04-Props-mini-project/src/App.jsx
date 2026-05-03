import React from 'react'
import ProCards from './components/ProCards'

const App = () => {

  const jobs = [
    {

      companyLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
      companyName: "Google",
      dateOfPost: "Apr 28, 2026",
      role: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Remote",
      paymentPerHr: 85,
      location: "San Francisco, CA"
    },
    {

      companyLogo: "https://pbs.twimg.com/profile_images/1909192784935788544/lIHiSEJ4_400x400.png",
      companyName: "Microsoft",
      dateOfPost: "Apr 27, 2026",
      role: "Backend Engineer",
      tag1: "Full Time",
      tag2: "In Office",
      paymentPerHr: 90,
      location: "Seattle, WA"
    },
    {

      companyLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      dateOfPost: "Apr 25, 2026",
      role: "Cloud Architect",
      tag1: "Part Time",
      tag2: "Flexible Schedule",
      paymentPerHr: 95,
      location: "Austin, TX"
    },
    {

      companyLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
      companyName: "Meta",
      dateOfPost: "Apr 24, 2026",
      role: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Remote",
      paymentPerHr: 75,
      location: "Menlo Park, CA"
    },
    {

      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/500px-Netflix_icon.svg.png?_=20220806170125",
      companyName: "Netflix",
      dateOfPost: "Apr 22, 2026",
      role: "React Developer",
      tag1: "Part Time",
      tag2: "Remote",
      paymentPerHr: 80,
      location: "Los Gatos, CA"
    },
    {
      companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcaKPsB3n3oQKXglaA8I2NTu56kgbhoRAWog&s",
      companyName: "Apple",
      dateOfPost: "Apr 20, 2026",
      role: "iOS Engineer",
      tag1: "Full Time",
      tag2: "In Office",
      paymentPerHr: 100,
      location: "Cupertino, CA"
    },
  ]
  return (
    <div className='parent'>

      {jobs.map(function (job) {

        return <ProCards company={job.companyName} logo={job.companyLogo} post={job.dateOfPost} role={job.role}
          tag1={job.tag1} tag2={job.tag2} paymentPerHr={job.paymentPerHr} location={job.location}
        />
      })}



    </div>

  )
}

export default App
