import { Injectable } from '@angular/core';

import {InMemoryDbService} from 'angular-in-memory-web-api'
import {Blog, Doctor} from "./model/domains";


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){

    let  specialityList =  [
     {  id: 1,key:  "#SP001", speciality : 'Hypnotherapy',img : "assets/img/specialities/specialities-01.png" },
     {  id: 2,key:  "#SP002", speciality : 'Naturopathy',img : "assets/img/specialities/specialities-03.png" },
     {  id: 3,key:  "#SP003", speciality : 'Reiki', img : "assets/img/specialities/specialities-02.png" },
    ];

    let appointments = [
      {  id: 1,doctorName : "Dr. Ruby Perrin",type:"New patient",speciality:"Dental",patient_key:"#PT0016",Patient_Name:"George Anderson",appointment_time:"Wed Nov 11 2020 10:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$150.00",img:"assets/img/patients/patient.jpg"},
      {  id: 2,doctorName : "Dr. Darren Eldder",type:"Old patient",speciality:"Dental",patient_key:"#PT0001",Patient_Name:"Megan Bird",appointment_time:"Wed Nov 03 2020 11:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$200.00",img:"assets/img/patients/patient1.jpg" },
      {  id: 3,doctorName : "Dr. Lane Seay",type:"New patient",speciality:"Cardiology",patient_key:"#PT0002",Patient_Name:"Alvin Boykin",appointment_time:"Wed Nov 1 2020 01:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$75.00",img:"assets/img/patients/patient2.jpg" },
      {  id: 4,doctorName : "Dr. Sofia Brient",type:"Old patient",speciality:"Urology",patient_key:"#PT0003",Patient_Name:"Nicholas Hicks",appointment_time:"Wed Oct 30 2020 09:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$100.00",img:"assets/img/patients/patient3.jpg" },
      {  id: 5,doctorName : "Dr. Marvin Campbell",type:"New patient",speciality:"Urology",patient_key:"#PT0004",Patient_Name:"Sherri McCarthy",appointment_time:"Wed Oct 28 2020 06:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$350.00",img:"assets/img/patients/patient4.jpg" },
      {  id: 5,doctorName : "Dr. Marvin Campbell",type:"Old patient",speciality:"Urology",patient_key:"#PT0005",Patient_Name:"Roger Loyd",appointment_time:"Wed Oct 27 2020 08:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$250.00",img:"assets/img/patients/patient5.jpg" }
    ]
    let patientsAppointment = [
      {  id: 1,doctorName : "Dr. Terri Cole",type:"Old Patient",speciality:"Fever",patient_key:"##PT0006",Patient_Name:"Terri Cole",appointment_time:"Wed Nov 14 2019 06:00:00 GMT+0530 (India Standard Time)",status : "active",amount:"$350.00",img:"assets/img/patients/patient6.jpg" },
      {  id: 2,doctorName : "Dr. Darren Eldder",type:"Old patient",speciality:"General",patient_key:"#PT0001",Patient_Name:"Melissa Skaggs",appointment_time:"Wed Nov 14 2019 05:00:00 GMT+0530 (India Standard Time)",status : "active",amount:"$100.00",img:"assets/img/patients/patient7.jpg" },
      {  id: 3,doctorName : "Dr. Lane Seay",type:"New patient",speciality:"General",patient_key:"#PT0007",Patient_Name:"Howard Pena",appointment_time:"Wed Nov 14 2019 03:00:00 GMT+0530 (India Standard Time)",status : "active",amount:"$75.00",img:"assets/img/patients/patient8.jpg" },
      {  id: 4,doctorName : "Dr. Sofia Brient",type:"Old patient",speciality:"General",patient_key:"#PT0008",Patient_Name:"Brian Powel",appointment_time:"Wed Nov 14 2020 01:00:00 GMT+0530 (India Standard Time)",status : "active",amount:"$350.00",img:"assets/img/patients/patient9.jpg" },
      {  id: 5,doctorName : "Dr. Marvin Campbell",type:"New patient",speciality:"General",patient_key:"#PT0010",Patient_Name:"Harvey Hendersson",appointment_time:"Wed Nov 14 2020 10:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$175.00",img:"assets/img/patients/patient10.jpg" },
      {  id: 5,doctorName : "Dr. Marvin Campbell",type:"New patient",speciality:"General",patient_key:"#PT0011",Patient_Name:"David Patterson",appointment_time:"Wed Nov 14 2020 11:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$450.00",img:"assets/img/patients/patient11.jpg" }
    ]

    let favourites = [
      {
        id : 1,
        doctor_name : "Dr. Ruby Perrin",
        speciality : "Dentist",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "MDS - Periodontology and Oral Implantology, BDS",
        Available : " Available on Fri, 22 Mar ",
        Earned : "3100.00",
        Price : "$160",
        profile : "assets/img/doctors/doctor-01.jpg",
        status : "1",
        type : "Female",
        location : "Georgia, USA",
        availableTime : "10 am",
        consulting_fees : "$100",
        booking_fees : "$10",
        video_call : "$50"
      },
      {
        id : 2,
        doctor_name : "Dr. Eric Buckles",
        speciality : "Surgery",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "BDS, MDS - Oral & Maxillofacial Surgery",
        Available : " Available on Fri, 22 Mar ",
        Earned : "3900.00",
        Price : "$190",
        profile : "assets/img/doctors/doctor-02.jpg",
        status : "1",
        type : "Female",
        location : "Montana, USA",
        availableTime : "8 am",
        consulting_fees : "$90",
        booking_fees : "$10",
        video_call : "$50"
      },
      {
        id : 3,
        doctor_name : "Dr. Lane Seay",
        speciality : "Cardiology",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "MBBS, MD - General Medicine, DNB - Cardiology",
        Available : " Available on Fri, 22 Mar ",
        Earned : "3700.00",
        Price : "$170",
        profile : "assets/img/doctors/doctor-03.jpg",
        status : "1",
        type : "Female",
        location : "Oklahoma, USA",
        availableTime : "2 pm",
        consulting_fees : "$70",
        booking_fees : "$10",
        video_call : "$50"
      },
      {
        id : 4,
        doctor_name : "Dr. Sofia Brient",
        speciality : "BDS, MDS - Oral & Maxillofacial Surgery",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "MBBS, MS - General Surgery, MCh - Urology",
        Available : " Available on Fri, 22 Mar ",
        Earned : "3000.00",
        Price : "$110",
        profile : "assets/img/doctors/doctor-04.jpg",
        status : "1",
        type : "Female",
        location : "Georgia, USA",
        availableTime : "11 am",
        consulting_fees : "$110",
        booking_fees : "$10",
        video_call : "$50"
    },
    {
      id : 5,
      doctor_name : "Dr. Marvin Campbell",
      speciality : "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3150.00",
      Price : "$130",
      profile : "assets/img/doctors/doctor-05.jpg",
      status : "1",
      type : "Male",
      location : "Florida, USA",
      availableTime : "12 pm",
      consulting_fees : "$80",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 6,
      doctor_name : "Dr. Katharine Berthold",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MS - Orthopaedics, MBBS, M.Ch - Orthopaedics",
      Available : " Available on Fri, 22 Mar ",
      Earned : "2900.00",
      Price : "$180",
      profile : "assets/img/doctors/doctor-06.jpg",
      status : "1",
      type : "Female",
      location : "Newyork, USA",
      availableTime : "7 am",
      consulting_fees : "$170",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 7,
      doctor_name : "Dr. Linda Tobin",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MD - General Medicine, DM - Neurology",
      Available : " Available on Fri, 22 Mar ",
      Earned : "2900.00",
      Price : "$160",
      profile : "assets/img/doctors/doctor-07.jpg",
      status : "1",
      type : "Female",
      location : "Texas, USA",
      availableTime : "10 pm",
      consulting_fees : "$130",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 8,
      doctor_name : "Dr. Paul Richard",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MD - General Medicine, DM - Endocrinology",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3200.00",
      Price : "$140",
      profile : "assets/img/doctors/doctor-08.jpg",
      status : "1",
      type : "Female",
      location : "Louisiana, USA",
      availableTime : "9 am",
      consulting_fees : "$90",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 9,
      doctor_name : "Dr. John Gibbs",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MD - Dermatology , Venereology & Lepros",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3000.00",
      Price : "$150",
      profile : "assets/img/doctors/doctor-09.jpg",
      status : "1",
      type : "Male",
      location : "Louisiana, USA",
      availableTime : "10 am",
      consulting_fees : "$120",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 10,
      doctor_name : "Dr. Olga Barlow",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MD - Dermatology , Venereology & Lepros",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3000.00",
      Price : "$150",
      profile : "assets/img/doctors/doctor-10.jpg",
      status : "1",
      type : "Male",
      location : "Louisiana, USA",
      availableTime : "10 am",
      consulting_fees : "$120",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 11,
      doctor_name : "Dr. Julia Washington",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MD - Dermatology , Venereology & Lepros",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3000.00",
      Price : "$150",
      profile : "assets/img/doctors/doctor-11.jpg",
      status : "1",
      type : "Male",
      location : "Louisiana, USA",
      availableTime : "10 am",
      consulting_fees : "$120",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 12,
      doctor_name : "Dr. Shaun Aponte",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MD - Dermatology , Venereology & Lepros",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3000.00",
      Price : "$150",
      profile : "assets/img/doctors/doctor-12.jpg",
      status : "1",
      type : "Male",
      location : "Louisiana, USA",
      availableTime : "10 am",
      consulting_fees : "$120",
      booking_fees : "$10",
      video_call : "$50"
    },
  ]

    let doctors: Doctor[] = [
                {
            id : 1,
            doctor_name : "Anita Sachdeva",
            specializations : ["Hypnotherapy", "Naturopathy", "Reiki", "Breathwork"],
            services : ["Hypnotherapy", "Past Life Regression Therapy","Ancestral Healing", "Family Constellation","Inner Child", "Reiki Healing",
            "Crystal Healing", "Sound Therapy","Breathwork", "Color Therapy"
            ],
            work_experience : [{title: "Reiki Master", duration: "22 years"}, {title: "Clinical Hypnotherapist", duration: "10 years"}, {title: "Naturopathy", duration: "3 years"}],
            speciality_profile : 'assets/img/specialities/specialities-05.png',
            since : "Wed May 27 2002 09:41:48 GMT+0530 (India Standard Time)",
            Education : "Clinical Hypnotherapist, Doctor of Naturopathy, Reiki Master",
            Available : " Available on Fri, 22 Mar ",
            Earned : "₹3100.00",
            Price : "₹2000",
            profile : "assets/img/doctors/doctor-thumb-01.jpg",
            status : "1",
            type : "Female",
            location : "Online & Panipat, India",
            availableTime : "10 am",
            consulting_fees : "₹3000",
            booking_fees : "₹1000",
            video_call : "₹3000",
            description : "Certified clinical hypnotherapist Anita has a lot of heart and expertise. More than 20 years ago, she also became a Reiki master. Anita, the center's founder, has spent the better part of the past 35 years in leadership roles in the educational sector, all the while walking the path of spirituality and guiding her students along that path. Many of her students' lives were altered for the better as a result of the advice she gave them. Several Divine Characters have been bestowed upon her. A lot of people have benefited from her sessions in terms of finding inner peace and overcoming personal health and wellness challenges, whether those challenges be mental, emotional, or spiritual.\n" +
              "Anita knows firsthand the transformative potential of hypnotherapy and is motivated to work in this field because of this knowledge. She was able to make progress in her life and gain equilibrium and perspective with the help of hypnotherapy. She gets a kick out of teaching her clients new techniques for relieving tension and establishing a sense of inner strength, independence, and serenity. During each session, Anita tailors her approach to the specific goals of her client."
        },
      {
        id : 2,
        doctor_name : "Adarsh Sachdeva",
        specializations : ["Reiki", "Breathwork"],
        services : ["Reiki Healing", "Crystal Healing", "Breathwork"],
        work_experience : [{title: "Reiki Master", duration: "25 years"}],
        speciality_profile : 'assets/img/specialities/specialities-05.png',
        since : "Wed May 27 2002 09:41:48 GMT+0530 (India Standard Time)",
        Education : "Reiki Master, Crystal Healing, Breathwork",
        Available : " Available on Fri, 22 Mar ",
        Earned : "₹3100.00",
        Price : "₹2000",
        profile : "assets/img/doctors/doctor-thumb-02.jpg",
        status : "1",
        type : "Male",
        location : "Online & Panipat, India",
        availableTime : "10 am",
        consulting_fees : "₹2000",
        booking_fees : "₹500",
        video_call : "₹1500",
        description : "Another Being Healer co-founder, Adarsh, has spent the past four decades in the financial industry, so he is sensitive to the importance of cultivating compassion and introspection in today's tense and unbalanced workplace. He is a Reiki Master who has helped many people through crystal energy healings and Reiki energy healings. " +
          "The length of the session can be anywhere from 30 minutes to 1 hour. Both in-person and distance healing are possible. He pays close attention to issues brought up by the client and anything else they may require, whether or not they realise it."
      },
      {
        id : 3,
        doctor_name : "Arun Chopra",
        specializations : ["Hypnotherapy", "Reiki", "Midbrain activation", "Breathwork"],
        services : ["Hypnotherapy", "Reiki Healing", "Midbrain activation", "Breathwork"],
        work_experience : [{title: "Reiki Grand Master", duration: "22 years"}, {title: "Clinical Hypnotherapist", duration: "10 years"}, {title: "Midbrain activation", duration: "10 years"}],
        speciality_profile : 'assets/img/specialities/specialities-05.png',
        since : "Wed May 27 2002 09:41:48 GMT+0530 (India Standard Time)",
        Education : "Clinical Hypnotherapist, Reiki Grand Master",
        Available : " Available on Fri, 22 Mar ",
        Earned : "₹3100.00",
        Price : "₹2000",
        profile : "assets/img/doctors/doctor-thumb-03.jpg",
        status : "1",
        type : "Male",
        location : "Online & Panipat, India",
        availableTime : "10 am",
        consulting_fees : "₹2000",
        booking_fees : "₹500",
        video_call : "₹1500",
        description : "Arun runs various schools and specializes in child psychology, besides have decades of experience as a Reiki Master, Clinical Hypnotherapist and a Mid brain activation expert. He will analyse your aura, feelings, and bodily processes and show you the way to self-healing. His ability to heal others through reiki is extraordinary, and during energetic sessions he frequently receives visions and information being channelled. He will send powerful distance healing and clear all energy blocks in your body and chakras." +
          "Arun's area of expertise is stimulating the midbrain in children between the ages of 5 and 15. Through the process of \"blindfold activation,\" a child is taught to achieve the miraculous state of super sensory development that allows them to \"see\" even when their eyes are closed. A genius isn't necessarily someone with an IQ above 130; rather, it's someone who can achieve the alpha-theta state of mind, at which the brain can perform at its peak. If a child's brain is developing normally, he or she will have excellent performance across the board from their senses, including the ability to intuitively perform tasks. A child in the genius stage is able to read faster, memorise more information, and focus more intently."
      },
      {
        id : 4,
        doctor_name : "Sadhana Rana",
        specializations : ["Reiki", "Magneto therapy", "Acupressure"],
        services : ["Reiki Healing", "Crystal Healing", "Magneto therapy", "Acupressure"],
        work_experience : [{title: "Reiki Master", duration: "26 years"}, {title: "Magneto therapist", duration: "26 years"}, {title: "Accupressure expert", duration: "26 years"}],
        speciality_profile : 'assets/img/specialities/specialities-05.png',
        since : "Wed May 27 2002 09:41:48 GMT+0530 (India Standard Time)",
        Education : "Reiki Master, Magneto therapy, Acupressure",
        Available : " Available on Fri, 22 Mar ",
        Earned : "₹3100.00",
        Price : "₹2000",
        profile : "assets/img/doctors/doctor-thumb-04.jpg",
        status : "1",
        type : "Female",
        location : "Online & Ranchi, India",
        availableTime : "10 am",
        consulting_fees : "₹2000",
        booking_fees : "₹500",
        video_call : "₹1500",
        description : "Sadhana Rana is passionate about sharing her knowledge of holistic healing modalities as a Reiki master, magneto therapy specialist, and accupressure practitioner. Since 1996, she has been helping people through the practise of alternative medicine, which includes techniques like Reiki, Pranic healing, Crystal therapy, Magneto therapy, Acupressure, and Acupuncture. She is the recipient of multiple honours and has presented her research at multiple conferences and seminars. Since 1996, she has been treating thousands of patients at her Rana Magnetotherapy Centre in Lalpur, Ranchi."
      },
      {
        id : 5,
        doctor_name : "Neha Arora ",
        specializations : ["Hypnotherapy", "Naturopathy", "Reiki","Breathwork"],
        services : ["Hypnotherapy", "Past Life Regression Therapy","Ancestral Healing", "Family Constellation","Inner Child", "Reiki Healing",
          "Crystal Healing", "Sound Therapy", "Theta healing","Accupressure", "Yoga"
        ],
        work_experience : [{title: "Clinical Hypnotherapist", duration: "10 years"}, {title: "Naturopathy", duration: "3 years"}],
        speciality_profile : 'assets/img/specialities/specialities-05.png',
        since : "Wed May 27 2002 09:41:48 GMT+0530 (India Standard Time)",
        Education : "Clinical Hypnotherapist, Doctor of Naturopathy, Reiki Master",
        Available : " Available on Fri, 22 Mar ",
        Earned : "₹3100.00",
        Price : "₹2000",
        profile : "assets/img/doctors/doctor-thumb-05.jpg",
        status : "1",
        type : "Female",
        location : "Online & Chandigarh, India",
        availableTime : "10 am",
        consulting_fees : "₹2000",
        booking_fees : "₹500",
        video_call : "₹1500",
        description : "Every week, Neha leads a workshop on singing bowl meditation for people in the public, private, and government sectors. She uses aocustic and sound therapy to help children with autism, tel cerebral palsy, and other developmental delays improve their behaviour and communication. She's making progress toward recovering from her drug habit. Through the use of sound therapies, she has helped many students and adults with high blood pressure bring it under control and improve their overall health. She has helped her students improve their concentration and focus through the use of singing bowl meditation and other spirtual and ancient Indian knowledge systems. She specialises in \"Inner Child Work,\" the practise of addressing underlying emotional, mental, and behavioural problems by examining how they originated in early life and how they are influenced by cultural, familial, and socioeconomic factors. Resolving our issues will require us to focus on issues we faced as children and to bring that memory into the light. My clients who have been able to overcome their difficulties are very grateful to her. They had life under control, having identified the fundamental, pervasive issues that had been at the heart of their problems and had kept them mired in a rut."
      },
      // {
      //   id : 5,
      //   doctor_name : "Dr. Pravin Kwatra",
      //   specializations : ["Ayurveda", "Naturopathy", "Reiki", "Breathwork"],
      //   services : ["Ayurveda", "Reiki Healing", "Crystal Healing", "Naturopathy", "Yoga", "Breathwork", "Accupressure", "Sujok"
      //   ],
      //   work_experience : [{title: "Clinical Hypnotherapist", duration: "10 years"}, {title: "Naturopathy", duration: "3 years"}],
      //   speciality_profile : 'assets/img/specialities/specialities-05.png',
      //   since : "Wed May 27 2002 09:41:48 GMT+0530 (India Standard Time)",
      //   Education : "G.A.M.S(Ayurveda), A.D.N.Y, Reiki Master",
      //   Available : " Available on Fri, 22 Mar ",
      //   Earned : "₹3100.00",
      //   Price : "₹2000",
      //   profile : "assets/img/doctors/doctor-thumb-05.jpg",
      //   status : "1",
      //   type : "Female",
      //   location : "Online & Chandigarh, India",
      //   availableTime : "10 am",
      //   consulting_fees : "₹2000",
      //   booking_fees : "₹500",
      //   video_call : "₹1500",
      //   description : "I am the founder of SuNayam (Spiritual Understanding, Naturopathy, Ayurveda, Yoga, Alternate therapies and Meditation) Holistic Healing Center (#1533, Sector-42 B, Chandigarh) in which we provide Ayurveda, Naturopathy(Mud Therapy, Hydrotherapy, Cromotherapy and Massage) Panchkarma, Reiki Spiritual Healing, Meditation, Accupressure, Sujok and I have organized more than 14 different camps of SuNAYAM.\n" +
      //     "\n" +
      //     "I am also having the Classes of Reiki Spiritual & Holistic Healings. More than 300 students had already trained.\n" +
      //     "\n" +
      //     "On 2nd Saturday of every month we organize SuNAYAM meetings for good health and discussions about Healthy & Wealthy life.\n" +
      //     "\n" +
      //     "People can find me on YouTube for Hydrotherapy, Why we get ill and for Pregnancy also.\n" +
      //     "\n" +
      //     "Achievements: (i) Award of Honor on Mother’s Day\n" +
      //     "\n" +
      //     "(ii) Award for Ambassador Of Peace\n" +
      //     "\n" +
      //     "(iii) Samarpan Navjeevan Award.\n" +
      //     "\n" +
      //     "I am the author of Prakritik Chikitsa (Introductory book of Naturopathy)"
      // }
    ]

    let patients = [
      {
            id : "1",
            key : "#PT0016",
            name : "David Pope",
            age : "38",
            address : "Newyork, USA",
            phone : "+1 923 782 4575",
            email : "richard@example.com",
            lastvisit : "Wed Nov 14 2020 10:00:48 GMT+0530 (India Standard Time)",
            paid : "100.00",
            bloodgroup : "AB+",
            type : "Male",
            img : "assets/img/patients/patient.jpg"
        },
      {
            id : "2",
            key : "#PT0001",
            name : "Bernice Hood",
            age : "29",
            address : "North Carolina, USA",
            phone : "+1 828 632 9170",
            email : "charlenereed@example.com",
            lastvisit : "Wed Nov 12 2020 05:00:48 GMT+0530 (India Standard Time)",
            paid : "100.00",
            bloodgroup : "o+",
            type : "Female",
            img : "assets/img/patients/patient1.jpg"
        },
        {
            id : "3",
            key : "#PT0002",
            name : "Joshua Miller",
            age : "23",
            address : "Maine, USA",
            phone : "+1 207 729 9974",
            email : "travistrimble@example.com",
            lastvisit : "Wed Nov 11 2020 08:00:48 GMT+0530 (India Standard Time)",
            paid : "250.00",
            bloodgroup : "B+",
            type : "Male",
            img : "assets/img/patients/patient2.jpg"
        },
        {
            id : "4",
            key : "#PT0003",
            name : "Sammy Oneal",
            age : "32",
            address : "Newyork, USA",
            phone : "+1 260 724 7769",
            email : "carlkelly@example.com",
            lastvisit : "Wed Nov 09 2020 09:00:48 GMT+0530 (India Standard Time)",
            paid : "200.00",
            bloodgroup : "A+",
            type : "Male",
            img : "assets/img/patients/patient3.jpg"
        },
        {
            id : "5",
            key : "#PT0004",
            name : "Victoria Butler",
            age : "25",
            address : "Indiana, USA",
            phone : "+1 504 368 6874",
            email : "michellefairfax@example.com",
            lastvisit : "Wed Nov 09 2020 06:00:48 GMT+0530 (India Standard Time)",
            paid : "150.00",
            bloodgroup : "B+",
            type : "Female",
            img : "assets/img/patients/patient4.jpg"
        },
        {
             id : "6",
            key : "#PT0005",
            name : "Rita McKinney",
            age : "25",
            address : "Florida, USA",
            phone : "+1 954 820 7887",
            email : "ginamoore@example.com",
            lastvisit : "Wed Nov 08 2020 09:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "AB-",
            type : "Male",
            img : "assets/img/patients/patient5.jpg"
        },
         {
             id : "7",
            key : "#PT0006",
            name : "Francis Giordano",
            age : "14",
            address : "Kentucky, USA",
            phone : "+1 315 384 4562",
            email : "elsiegilley@example.com",
            lastvisit : "Wed Nov 06 2020 07:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "O-",
            type : "Female",
            img : "assets/img/patients/patient6.jpg"
        },
        {
             id : "8",
            key : "#PT007",
            name : "Kate Mason",
            age : "25",
            address : "California, USA",
            phone : "+1 707 2202 603",
            email : "joangardner@example.com",
            lastvisit : "Wed Nov 05 2020 12:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "A-",
            type : "Female",
            img : "assets/img/patients/patient7.jpg"
        },
        {
             id : "9",
            key : "#PT008",
            name : "Glenn Johnson",
            age : "28",
            address : "New Jersey, USA",
            phone : "9548207887",
            email : "danielgriffing@example.com",
            lastvisit : "Wed Nov 05 2020 07:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "o+",
            type : "Female",
            img : "assets/img/patients/patient8.jpg"
        },
        {
             id : "10",
            key : "#PT0009",
            name : "Monty Smith",
            age : "28",
            address : "Florida, USA",
            phone : "+1 850 358 4445",
            email : "Elsie@example.com",
            lastvisit : "Wed Nov 04 2020 10:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "A+",
            type : "Male",
            img : "assets/img/patients/patient9.jpg"
        },
        {
             id : "11",
            key : "#PT0010",
            name : "Leroy Barnes",
            age : "19",
            address : "California, USA",
            phone : "+1 858 259 5285",
            email : "robertrhodes@example.com",
            lastvisit : "Wed Nov 04 2020 09:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "B+",
            type : "Female",
            img : "assets/img/patients/patient10.jpg"
        }   ,
        {
             id : "12",
            key : "#PT0011",
            name : "William Colbert",
            age : "9",
            address : "Colorado, USA",
            phone : "+1 303 607 7075",
            email : "harrywilliams@example.com",
            lastvisit : "Wed Nov 03 2020 06:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "A-",
            type : "Male",
            img : "assets/img/patients/patient11.jpg"
        }
    ]

    let reviews = [
      {
         id : 1,
         patient_name : "Michelle Fairfax",
         doctor_name : "Dr. Sofia Brient",
         patient_pic : "assets/img/patients/patient4.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-04.jpg",
         ratings : "5",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
         id : 2,
         patient_name : "Carl Kelly",
         doctor_name : "Dr. Lane Seay",
         patient_pic : "assets/img/patients/patient3.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-03.jpg",
         ratings : "4",
         description : "",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
         id : 3,
         patient_name : "Charlene Reed",
         doctor_name : "Dr. Ruby Perrin",
         patient_pic : "assets/img/patients/patient1.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-01.jpg",
         ratings : "4",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
         id : 4,
         patient_name : "Daniel Griffing",
         doctor_name : "Dr. Paul Richard",
         patient_pic : "assets/img/patients/patient8.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-08.jpg",
         ratings : "4",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 5,
         patient_name : "Elsie Gilley",
         doctor_name : "Dr. Katharine Berthold",
         patient_pic : "assets/img/patients/patient6.jpg",
         doctor_pic : "assets/img/patients/patient6.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 6,
         patient_name : "Elsie Gilley",
         doctor_name : "Dr. Katharine Berthold",
         patient_pic : "assets/img/patients/patient6.jpg",
         doctor_pic : "assets/img/patients/patient6.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 7,
         patient_name : "Gina Moore",
         doctor_name : "Dr. Marvin Campbell",
         patient_pic : "assets/img/patients/patient5.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-05.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 8,
         patient_name : "Harry Williams",
         doctor_name : "Dr. Olga Barlow",
         patient_pic : "assets/img/patients/patient10.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-10.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 9,
         patient_name : "Joan Gardner",
         doctor_name : "Dr. Linda Tobin",
         patient_pic : "assets/img/patients/patient7.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-07.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 10,
         patient_name : "Travis Trimble",
         doctor_name : "Dr. Eric Buckles",
         patient_pic : "assets/img/patients/patient2.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-02.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      }
  ]

  let comments = [

    {
      "name" : "Michelle Fairfax",
      "email" : "Fairfax@example.com",
      "comment" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      "name" : "Elsie Gilley",
      "email" : "Fairfax@example.com",
      "comment" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }

  ]
  // ctrl + shift + j : unintend multi lines into 1
  let blogs: Blog[] = [
   {
     id : 1,
     title : "What is Hypnotherapy and how does it work?",
     description : "Hypnosis is an effective and natural approach that allows for access to your subconscious mind by relaxing and bypassing the conscious mind. Hypnotherapy is the 'therapy' carried out during this altered state of awareness, which can be used to help you gain control over patterns, behaviors, fears, thoughts, feelings, and actions. It can be a guide to past experiences and clarify causes/reasons. It can help you gain a better understanding of yourself and your relationships with others and it can provide a glimpse into future life experiences, goals, and life purpose." +
       "<br>Hypnosis itself is not a form of treatment. Instead, a therapy called hypnotherapy or hypno-psychotherapy is carried out while the patient is in hypnotic state. Hypnosis is a state of deep relaxation and focus combined with heightened awareness brought on by suggestion. It is a natural trance state, similar to daydreaming, where time moves very quickly and one experiences good feelings of profound body and mind relaxation." +
       "<br>The foundation of hypnotherapy is the idea that the mind and body are interdependent. The therapist's goal in guiding a person to hypnotic state, is to activate the body's hidden subconscious mechanisms for both mental and physical self-healing." +
       "<br>Anyone can be guided into a hypnotic state; the patient's gullibility or suggestibility is not a requirement. Practitioners of hypnotherapy assert that the relaxed and focused state it brings about is a natural result of the mind at work." +
       "<br>Patients who receive hypnotherapy are awake and aware but receptive to the influence of suggestion. Nothing can be forced upon them against their will. Through hypnotherapy, patients can explore repressed, unpleasant emotions or feelings that are lodged in their subconscious minds. This may result in a profound and lasting change where the client is better equipped to handle stressors like discomfort, rejection, fear, or anxiety." +
       "<br> Hypnotherapy has been proven to be successful in treating a variety of conditions, including addictions, stress, phobias, anxiety, and chronic pain brought on by medical conditions, addiction, relationship/family/work conflicts, sleep disorders, anxiety, depression, Post-Traumatic Stress Disorder (PTSD), grief and loss of a loved one, cessation of smoking, weight loss, and many more.",
     createdBy : "Anita Sachdeva",
     createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
     comments : 12,
     type : "Hypnotherapy",tags: ["Hypnotherapy", "Benefits"],
     status : "active",
     img : "assets/img/blog/hypno-blog.jpg",
     doctor_name : "Anita Sachdeva",
     doctor_pic : "assets/img/doctors/doctor-thumb-01.jpg"
   },
  {
    id : 2,
    title : "Every Anxiety Has A Story Which Wants To Be Discovered",
    description : "The secret to a life without anxiety is to travel back in time to discover the story of your anxiety. We fear rejection, exposure, and judgement when we experience anxiety, an overwhelming and uncontrollable feeling. Everyone's default state should be one of being able to face life without fear. Momentary bouts of fear or anxiety are normal and not cause for concern, but when they interfere with your ability to function normally, then there may be a problem. When you wake up in the morning feeling anxious, you know that something needs to be done. In severe cases, the symptoms may even be physical. You can't approach your day the way other people do when you're anxious. It seems as though you are imprisoned by a large monster. Fortunately, finding the root of irrational anxiety is not difficult and, even better, it can be eliminated once you understand how your anxiety began." +
      "<br><br>A sense of impending danger, nervousness, restlessness, rapid breathing, sweating, trembling, feeling weak or exhausted, and trouble concentrating are just a few of the typical symptoms of anxiety. Anxiety can make it difficult for you to focus, concentrate, sleep, and enjoy life. It can have a negative impact on both your physical and mental health. A healthy level of anxiety is a normal part of our lives, but when it becomes excessive, extreme, or persistent, it can be harmful to our physical and mental health. When that occurs, it's critical to make an effort to comprehend what is causing our anxiety so that we can address it." +
      "<br><br>No matter how severe your anxiety is, know that there is support and assistance available. Rapid Transformational Therapy® (RTT®), a cutting-edge, outcome-driven hypnotherapy technique, can assist you in accessing your subconscious mind to determine the origin of your anxiety problem and where and when it was formed. Helping you understand what your subconscious mind was trying to defend you from by 'inventing' anxiety is the next step. After that, we assist you in modifying the false beliefs that continue to cause you to experience anxiety so that you can start living a life free of anxiety and its negative consequences. RTT® literally rewires your brain by introducing new, powerful, and positive beliefs to replace the old, out-of-date beliefs that have kept you imprisoned in a world of anxiety for far too long by going back in time to find the cause and the story of your anxiety." +
      "<br><br>Your hypnotherapy session will put you in a deep state of relaxation. Your subconscious mind will be guided to identify the root cause of your anxiety problem. You'll be able to pinpoint when it started and what triggered it. The first step to recovery is realising the source of your anxiety and its history. By literally rewiring and reframing your negative thought patterns into positive ones, RTT® hypnotherapy enables you to finally achieve your goal of permanently eradicating anxiety. The goal of RTT® is to help you identify the underlying causes of your anxiety, which is a liberating and healing experience. You will learn when, where, and why it began, which will give you the chance to finally let go of your anxiety." +
      "<br>,<br>",
    createdBy : "Anita Sachdeva",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Hypnotherapy",
    tags: ["Hypnotherapy", "Anxiety"],
    status : "active",
    img : "assets/img/blog/blog-01.jpg",
    doctor_name : "Anita Sachdeva",
    doctor_pic : "assets/img/doctors/doctor-thumb-01.jpg"

  },
  {
    id : 3,
    title : "Hypnotherapy For Anger",
    description : "All of us have experienced anger. You are motivated to act, exert effort, or let out suppressed emotion by the powerful, crimson tide of emotion. It's a typical and beneficial emotion. But if it happens too frequently or isn't handled properly, it can be extremely damaging. One of the most difficult emotions to control is anger, and as children, we are frequently not taught healthy ways to control our anger. Therefore, if you notice that you lose control when you become angry, if trivial things make you angry, or if you often act in ways that you later regret, you may need help controlling your anger." +
      "<br><br>It can be challenging to define anger because you have to have felt it to understand it. Fortunately, by the time we are five years old, the majority of us have experienced anger. Although it is intense and challenging to deal with, anger is necessary to help us process our emotions and the environment around us. It most frequently occurs when something has gone wrong or when someone has wronged you, and it frequently travels with feelings of stress, frustration, and irritability. We can express our negative emotions and become more motivated to solve problems when we are angry. However, persistent or excessive anger can lead to issues." +
      "<br><br>The amygdala, two almond-shaped brain structures, are the source of all emotions, including anger. This area of the brain is in charge of spotting dangers to our physical, mental, or emotional health and sounding an alarm to prompt us to take action to defend ourselves. Because this tiny portion of the brain is so effective at what it does, it frequently causes us to react to a situation before the cortex, the area of the brain in charge of thought and judgement, has had a chance to assess the situation and determine whether our reactions are appropriate. So frequently, we react in anger before we consider the effects of our choices. It explains why some people may react in anger when confronted with a situation in the moment, and then after giving it some thought, respond in a more mature manner." +
      "<br><br>Naturally, anger isn't just a mental state. When you get angry, you might experience some or all of the physical reactions that it can cause in us. These responses comprise:" +
      "<br><br><ul><br>" +
      "  <li>Faster heartbeat</li><br>" +
      "  <li>Tense muscles</li><br>" +
      "  <li>Clenching your fists</li><br>" +
      "  <li>Tightness in your chest</li><br>" +
      "  <li>Increase in temperature</li><br>" +
      "  <li>Feeling tense or nervous</li><br>" +
      "  <li>Being unable to relax</li><br>" +
      "  <li>Getting irritated easily</li><br>" +
      "  <li>Feeling humiliated</li><br>" +
      "  <li>Resenting other people</li><br>" +
      "  <li>Shouting</li><br>" +
      "  <li>Starting fights</li><br>" +
      "  <li>Breaking things</li><br>" +
      "  <li>Self harming</li><br>" +
      "</ul>" +
      "Although anger is a normal emotion, experiencing it too frequently or for too long can have serious negative effects on your health and occasionally even the health of those around you. You might encounter the following problems as a result of persistent anger: Although anger is a normal emotion, experiencing it too frequently or for too long can have serious negative effects on your health and occasionally even the health of those around you. You might encounter the following problems as a result of persistent anger:" +
      "<br><br><ul><br>" +
      "  <li>Chronic headaches</li><br>" +
      "  <li>Digestive problems</li><br>" +
      "  <li>Insomnia</li><br>" +
      "  <li>Anxiety and depression</li><br>" +
      "  <li>High blood pressure</li><br>" +
      "  <li>Skin problems like eczema</li><br>" +
      "  <li>Increased risk of heart attack and stroke</li><br>" +
      "</ul>" +
      "Your personal life may also be impacted by long-term, unchecked anger. When you struggle with anger, friends and family may turn away from you, and it can be challenging to establish or maintain relationships. At the other extreme, you might even start venting your rage on people in your life, which would put you in danger of being arrested. When it reaches this point, it is unfortunately very difficult to break the cycle on your own, which is why getting help as soon as possible is crucial." +
      "<br><br>By the time we are adults, the majority of us have developed an understanding of what anger is as an emotion, how it feels, and (hopefully) how to deal with it. But there is one aspect of anger that many people are unaware of, and it frequently alters how we perceive and control those emotions." +
      "<br><br>We don't feel angry just because we feel angry. Anger is always (and I mean ALWAYS) the result of another emotion . And the most frequent are those that are the most difficult for us to manage, like stress, fear, and disappointment. The brain turns to anger as a coping mechanism for difficult emotions because it knows how to do so. As a result, anger is a reaction to the initial feelings. Therefore, sometimes it's more difficult to identify the source of your rage and frustration than it is to simply state, 'What is it that's making me angry?' Sometimes the best way to deal with a feeling requires digging deeper inside to find its true source before learning how to handle it." +
      "<br><br>I want to address the last point. Solution Focused Hypnotherapy is an excellent tool for addressing the underlying causes of your feelings and issues as well as removing any subconscious barriers standing in your way. In actuality, hypnotherapy is among the best methods for controlling anger." +
      "<br><br>You can achieve a trance-like state that enables your subconscious to surface and discuss the source of your anger with your therapist using a combination of talking therapy and deep breathing exercises. The two of you can then collaborate to change your destructive thought patterns, your responses to anger triggers, and to create healthy coping mechanisms." +
      "<br><br>Solution Focused Hypnotherapy can support you in gaining control over your negative thoughts as well as in creating better coping mechanisms for the future. Together, we'll work to teach you how to respond to situations more benevolently. We'll also use guided imagery to create positive behavioural templates that will boost your self-esteem. If you're interested in learning more, please get in touch to schedule a free, private consultation to discuss your goals and determine whether Solution Focused Hypnotherapy might be able to assist you.",
    createdBy : "Anita Sachdeva",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Hypnotherapy",
    tags: ["Hypnotherapy", "Anger"],
    status : "active",
    img : "assets/img/blog/blog-02.jpg",
    doctor_name : "Anita Sachdeva",
    doctor_pic : "assets/img/doctors/doctor-thumb-01.jpg"
  },
  {
    id : 4,
    title : "Can Hypnotherapy Help With Low Self-Esteem?",
    description : "Is your lack of self-confidence preventing you from advancing in life? Stopping you from even attempting to reach your full potential in your work or personal life? And even if you do try, do you find that you constantly criticise yourself?" +
      "<br>What if I tell you that you are not the only one in there!" +
      "<br><br>That negative voice in your head is low self-esteem, and it affects the majority of people every once in a while. However, it can be very challenging to overcome low self-esteem and feel better about yourself when the ideal is healthy self-esteem and confidence; especially when dealing with it alone. One of the best ways to manage and overcome low self-esteem and help you feel confident and good about yourself is through hypnotherapy." +
      "<br><br>In essence, self-esteem is a state of mind. It involves having confidence in oneself and believing in one's own capabilities, talents, and strengths. It involves embracing who you are and expressing that to the outside world. When you feel good about yourself, you project confidence, which can have a lot of positive side effects on your life. It increases your credibility in the workplace, aids in creating a favourable first impression, and strengthens your capacity to handle stress and meet challenges head-on. People feel more at ease, which slightly eases all kinds of relationships." +
      "<br><br>But there can be just as many detrimental consequences if we don't feel good about ourselves. It can be challenging to recognise our own strengths, see what we're good at, and move forward in life when we have a low opinion of ourselves. It can keep you in your comfort zone and prevent you from attempting new things, which can hold you back. You shouldn't do it because it's bad for your mental health as well. Depression, anxiety, stress, and burnout have all been linked to low self-esteem. When it's challenging to care for and love yourself, it's challenging to do other things as well." +
      "<br><br>Numerous events in your life can have an impact on your sense of self-worth, and they all leave your subconscious with thought patterns that are intended to keep you safe. For instance, you might have trouble with math and received a poor grade on one of your schoolwork's math exams. Your mind then conjures up these unfavourable ideas about the matter and repeats them constantly until they become automatic. Your subconscious will make an effort to shield you from the unpleasant emotions by telling you that math is difficult and that you shouldn't even attempt it. This will lead to a different kind of negative thought pattern that you will have to deal with. This can significantly lower your confidence over time and persist into adulthood. Due to this very reason, many of the clients I've worked with are hesitant to handle their finances properly or do anything else that involves numbers." +
      "<br><br>Working directly with the subconscious mind is one of the main reasons hypnotherapy is such an effective treatment for low self-esteem and confidence in particular. We are able to work with that deeper area of your mind where the unfavourable thoughts about yourself are located by directing you into a focused state of attention or 'trance' through guided relaxation. These unhelpful thoughts happen automatically and are frequently just your subconscious trying to protect you, but they are incredibly detrimental to your mental well-being and self-esteem. And because these unfavourable ideas are so deeply ingrained in our minds, it can be extremely challenging to change them with just willpower. The subconscious mind is rather set in its ways and doesn't pay attention to logic." +
      "<br><br>Fortunately, hypnosis and the subconscious get along famously. In solution-focused hypnotherapy, we combine positive talking therapy and hypnosis. This method builds on your strengths and enables you to visualise the future while encouraging you to take baby steps toward it, making you feel more confident and good about yourself." +
      "<br><br>In order to assist you in changing those negative thought patterns into more positive ones, we then consolidate sessions using hypnosis, which enables us to speak directly to your subconscious mind. I'll offer advice that will assist you in shifting your inner voice from one of criticism to one of support and encouragement while you are in that deeply relaxed state." +
      "<br><br>It's important to always keep in mind that hypnotherapy is not a magic wand; rather, it's a collaborative process that frequently calls for several sessions. It helps you rewire your thinking at the most fundamental level, making it a wonderful therapeutic tool that enables you to make the desired changes in a short amount of time." +
      "Although changing low self-esteem can be difficult, it is possible. I would be happy to assist you in increasing your confidence and self-worth. Contact us to schedule a free initial consultation so that we can learn more about your situation, offer guidance, and discuss what your individualised treatment plan might entail.",
    createdBy : "Arun Chopra",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Hypnotherapy",
    tags: ["Hypnotherapy", "Self-Esteem", "Low-Confidence"],
    status : "active",
    img : "assets/img/blog/blog-03.jpg",
    doctor_name : "Arun Chopra",
    doctor_pic : "assets/img/doctors/doctor-thumb-03.jpg"
  },
  {
    id : 5,
    title : "Does Hypnotherapy Work Online?",
    description : "Unbelievable as it may seem, the pandemic has had some really positive effects. It has aided us in rediscovering a sense of neighbourhood pride, brought friends and families together, and allowed us to reconnect with former acquaintances. And everything was done through screens." +
      "<br><br>Since we've been trying to maintain distance and haven't really been able to meet in person for more than a year, the pandemic has indeed changed the way we meet, chat, and form connections. This implies that all of our meetings are now held online and using tools like Zoom is the new standard. In fact, it's so commonplace that many people are hesitant to immediately return to in-person communication! Online meetings are more practical, enable participants to accomplish more in a day, eliminate the need for extensive, expensive, and time-consuming travel, and are generally equally productive to in-person meetings." +
      "<br><br>The public and private mental health services sectors were among those affected by the shift online. Although the initial effects were shaky, the net effect has been that more people than ever before have access to mental health care, including hypnotherapy. Hypnotherapy is one of the fields that has experienced significant growth as a result of the rising tide of people who feel more comfortable asking for help online. Therefore, despite the fact that we are no longer limited to online therapy, many people still choose to continue their therapy sessions online. So, if you're interested in learning more about how online hypnotherapy functions or how effective it can be, keep reading!" +
      "<br><br>In order to effect change, hypnosis induces a trance state and communicates with your subconscious. By making you feel comfortable and relaxed and asking you to focus on or imagine specific things while paying close attention to how you feel in your body, we can induce trance. It actually becomes simpler for us to enter this trance state because your home is likely the place where you feel the safest and most at ease. Once there, you remain in complete control while listening to encouraging suggestions, assessing whether the knowledge shared is helpful, and rejecting it if it is not. Numerous clients have noted that the entire process, which is meant to assist you in shifting and changing your thought patterns, makes them feel like they are daydreaming. Hypnosis is not at all what Hollywood portrays it to be, and a therapist is not even necessary—all that is required is for them to lead you into the trance state and through the suggestions. It is therefore entirely feasible to conduct hypnotherapy via Zoom." +
      "<br><br>Online Hypnotherapy is very effective. In fact, it offers the same benefits of in-person hypnotherapy without the need to travel or wait for appointments. There hasn't been any difference in outcomes between in-person and online hypnotherapy in my experience (or others' experience). In fact, some people find that they are more at ease and open to hypnotherapy online than they would be in person. Even before the pandemic, there had been extensive research into the efficacy of online therapies, and a systemic review published in the Journal of Medical Internet Research concluded that 'results indicate that e-therapy seems to be at least equivalent to face-to-face therapy'. To make sure this is the case, I keep track of each client's development during hypnotherapy, and you can see some of their incredible progress here. Numerous conditions can be successfully treated with online hypnotherapy, including anxiety, which is a topic I get asked about quite frequently. In fact, since it lessens the stress of making it to an in-person appointment, online hypnotherapy is frequently a better fit for people with anxiety." +
      "<br><br>In the end, it's up to you to decide. You shouldn't worry about hypnotherapy being more effective in one situation than the other because, as far as I can tell, there is no difference in the outcomes between the two. It all comes down to personal preference and what works with your lifestyle. It's totally fine if some clients prefer to interact with the therapist in person. But online hypnotherapy might be the best choice for many people with hectic modern schedules. It's more flexible than in-person appointments, convenient, and easy to fit into your schedule when you don't need to travel. Additionally, you can choose the therapist you think will work best for you rather than being constrained to those who are located nearby." +
      "<br><br>It's important to keep in mind that online hypnotherapy differs from face-to-face sessions in some ways. Even though the methods and topics of discussion may not alter, how things are done will, so it is a good idea to be ready. Here are my top 5 suggestions for getting the best results from your online hypnotherapy session since I've been providing hypnotherapy on Zoom for quite some time." +
      "<br><br><ol><br>" +
      "  <li>Before beginning online hypnotherapy, it's crucial that you do some research on your practitioner. Make sure the therapist you pick is someone you can be completely honest with and develop a strong rapport with. To help you determine whether we are a good fit before we begin working together, I offer a free initial phone or Zoom chat.</li><br>" +
      "  <li>Make sure your internet connection is solid and dependable. Nothing is more annoying than having your session interrupted midway through by a faulty internet connection!</li><br>" +
      "  <li>Try to locate a place in your house that is quiet and unlikely to cause any disruptions. Either way works fine; however, wearing headphones will guarantee total privacy during your session and will also help you feel completely immersed when it's time to perform the hypnosis.</li><br>" +
      "  <li>Get comfortable. Make sure you have a comfortable place to sit or lie down, as well as room to move if necessary, wherever you hold your sessions. Your hypnotherapist will need to see your head and shoulders during the trance work in order to assess your progress. Effective hypnotherapy depends greatly on your level of comfort, and since you're at home, you have total control over your surroundings.</li><br>" +
      "  <li>Allow yourself time to get ready. Not necessarily by doing anything fancy, but at the very least by giving yourself enough time to unwind and mentally prepare without feeling rushed or under pressure. Likewise, instead of immediately moving on to the next thing after the session, try to give yourself 5 or 10 minutes to process and decompress.</li><br>" +
      "</ol>" +
      "If you've been thinking about hypnotherapy, now might be the ideal time to begin. Online hypnotherapy is incredibly efficient and practical, and online consultations are a great way to connect with therapists without having to schedule travel time. Please feel free to schedule an initial chat if you'd like to learn more about your options or to contact us with any questions or to request advice.<br>",
    createdBy : "Anita Sachdeva",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Hypnotherapy",
    tags: ["Hypnotherapy", "Online", "Distance"],
    status : "active",
    img : "assets/img/blog/blog-04.jpg",
    doctor_name : "Anita Sachdeva",
    doctor_pic : "assets/img/doctors/doctor-thumb-01.jpg"
  },
  {
    id : 6,
    title : "What is Reiki?",
    description : "Reiki is, first and foremost, energy. Everything is made of energy. You are accustomed to energy moving through your body if you engage in physical activities like tai chi, yoga, or meditation. You already possess that energy, and it belongs to you. Reiki energy establishes a link between our higher selves and the outside world. In an effort to find healing, it brings what is outside of us inside of us." +
      "<br><br>You already possess the ability to use Reiki if you have ever been able to notice a change in someone's energy through their body language or tone, or even through the plugged-in or unplugged state of an electrical appliance. Although I've always sensed energy shifting within and around me, learning Reiki has only made it easier for me to do so." +
      "<br><br>I've always needed to physically use my hands and felt a connection to the earth. Now that I have the ability and knowledge to do so energetically. I had to work on myself before I could see a need for healing in someone else's energetic field and physical body. I was able to see, feel, and comprehend where my own chakra blockages were thanks to Reiki Healing Level 1. I was able to investigate the physical stagnations of my classmates on Level 2. (Please read the separate blog about chakras to learn more about what they are.)" +
      "<br><br>Healing with Reiki often takes time to take effect. It might take them up to 3–4 weeks to notice a change. It's crucial to pay attention to any changes you notice inside of yourself. Depending on your wounding, these adjustments can include having vivid dreams, having different energy levels, letting go of emotions, and even having minor detoxification symptoms. To fully benefit from Reiki healing, you must be receptive and open to receiving it. Reiki is intended to support personal development, whether it be through heightened awareness, increased wisdom, or enhanced intuition." +
      "<br><br>Reiki masters do not control when or where the healing occurs. That will be done for you by your physical body and inner wisdom. Don't fight it. What persists, according to Carl Jung, 'resists'. Reiki healing is based on Science in addition to its spiritual components. In order to document these energies both inside of us and all around us visually, kirlian photography was created in the late 1930s. This is also provided by a local Detroit photography company by the name of AuraAura. Although Reiki is said to have been created by Dr. Mikao Usui, it's possible that he only rediscovered this technique in the late 1800s. Usui discovered a healing technique known as Reiki through hand gestures and symbols after engaging in Zen Buddhism. Later, in 1937, Mrs. Hawayo Takata brought Reiki from Japan to Hawaii, and subsequently to the rest of the United States and the rest of the world." +
      "<br><br>Anyone and everyone can benefit from Reiki healing, but this is especially true if you are experiencing any type of imbalance or low energy. I bless the candles with my hands, set a mindful intention, and pray to infuse them with Reiki energy as a certified Reiki Master. I use crystals and scents to further enhance the candle themes in addition to Reiki healing. You only need to light your candle to experience the magic. Be prepared to receive.",
    createdBy : "Adarsh Sachdeva",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Reiki",
    tags: ["Reiki"],
    status : "active",
    img : "assets/img/blog/blog-05.jpg",
    doctor_name : "Adarsh Sachdeva",
    doctor_pic : "assets/img/doctors/doctor-thumb-02.jpg"
  },
  {
    id : 7,
    title : "Energy blocks and the healing chakras",
    description : "The word 'chakra', which means 'wheel' in Sanskrit, describes the numerous energy vortices that penetrate both the aura and the physical body. There are seven major chakras, 21 minor chakras, and numerous smaller chakras. Over time, more are coming to light. The lesser chakras located in the soles of the feet and the palms of the hands are the most frequently used." +
      "<br><br>The chakras are generally easier to feel than to see. Holding the hand a few inches from the physical body will allow you to feel them the simplest. It is rarely necessary to take off any clothing in order to receive healing because the presence of clothing has no detrimental effect on the energy or the ease with which it can be felt." +
      "<br><br>The chakras are so delicate that they are influenced by both the energy of other people as well as the energy that permeates certain locations. We already know that some people make you feel good while others make you feel drained. When you're in the same room as someone you've never met before, you might experience this feeling and find yourself suddenly feeling at peace. Similar to this, you might spend just a few minutes with someone and feel uneasy or even sick, even though there doesn't seem to be a real reason for it. Although we frequently are unaware of it at a conscious level, each of us employs different energetic strategies to conceal our vulnerability, manipulate others, and protect ourselves." +
      "<br><br>The best thing we can do to keep ourselves flexible on all levels—physical, emotional, mental, and spiritual—is to develop a strong system that keeps us protected from outside influence to a large extent." +
      "<br><br>Chakras resemble light wheels that are spinning. When functioning properly, they rotate in a clockwise direction, absorbing energy from the surrounding energy field to continuously renew our entire being. They each emit a different light frequency, which is perceived as a different color, because they spin at various speeds. Red is the colour of the base or root chakra, while the other colours are orange, yellow, green, blue, indigo or purple, and finally white." +
      "<br><br>One of the seven layers of the aura is connected to each of the major chakras. The layer closest to the physical body is connected to the first chakra, followed by the layer next to it, and so on." +
      "<br><br>Although the major chakras are always numbered from the base up, different schools have given them various names, which can be confusing. Some people use names related to their location, while others use names related to their job. The seven chakras we'll be concentrating on in this book are identified as follows:" +
      "<br><br><ol>" +
      "  <li><h5>Root Chakra</h5>This chakra is red in colour and is located at the base of the spine, between the coccyx and the pelvic bone. Its main purpose is to keep us alive and rooted in the physical world. It is connected to bodily sensation. The physical is also connected to the first layer of the aura.</li><br>" +
      "  <li><h5>Sacral Chakra</h5>In the midline, just below the navel, is where you'll find this chakra. Its primary function is connected to reproduction and the giving and receiving of sexual pleasure. It is orange in colour. The emotional is also related to the second layer of the aura.</li><br>" +
      "  <li><h5>Solar Plexus Chakra</h5>Either above the stomach in the midline or slightly to the left is where the solar plexus is located. It has a yellow colour. On this website, we form our opinions. The hub of strength, power, and will is located here. The third layer of the aura is connected to cognitive processes.</li><br>" +
      "  <li><h5>Heart Chakra</h5>Since the lower three chakras deal with the physical and emotional realms and we are now starting to move into the spiritual, this chakra is occasionally referred to as a transitional chakra. The centre of human love, the heart connects the two worlds. Its color, emerald green, also serves as a centre for emotion. The astral plane is its top layer.</li><br>" +
      "  <li><h5>Throat Chakra</h5>This chakra is located in the throat and belongs to the divine world, as its name suggests. When the throat chakra is in good condition, it enables us to listen without passing judgement, speak our truth bravely, and listen as well. It is the place where our vocation and integrity reside. It has a turquoise or blue hue. The etheric body is the fifth layer.</li><br>" +
      "  <li><h5>Brow Chakra</h5>This elevates us to a higher realm of love that is greater than human love. It is the location of spiritually clear vision. The celestial body is the layer that this chakra is connected to. It has a purple or dark blue hue.</li><br>" +
      "  <li><h5>Crown Chakra</h5>The crown chakra, which is located at the top of the head, serves as our portal to the supernatural and spiritual worlds. We can use it to arouse spiritual energy for our own benefit or to aid in the healing of others. It is also the source of knowing, of knowing without reason or thought. The physical, emotional, intellectual, and spiritual components of the whole are all present here. It has a violet hue.</li><br>" +
        "</ol>" +
      "The term 'block' is frequently used to describe a chakra that is not functioning properly, but it actually refers to a variety of issues. The chakra may be out of balance or even physically damaged if it is spinning too slowly, in the wrong direction, or barely at all (referred to as 'silent'). It might be too brittle and active to gently open and close at your command." +
      "<br><br>There isn't much of a choice but to deal with the energy and the related psychological material that is flowing through a chakra when it is 'open '(though they are never completely closed). Although it is generally true that we are healthier when there is a greater flow of energy, some of the energy we must deal with can still be painful on an emotional or psychological level. This is the main reason why we 'block' or 'shut down' our chakras in the first place." +
      "<br><br>These blocks are not just lying around. They are created by you and put in place to shield you from what you are unable to process at the time. However, the majority of the blocks outmode themselves, impeding further development." +
      "<br><br>It resembles a spring cleaning exercise to get rid of them. We take a look at everything we've gathered and decide to get rid of some of it. During the process, we might discover something exquisite that we want to reintroduce to the public eye. But first it needs to be polished, dusted, or freed of tarnish. This is similar to how your chakras are cleansed." +
      "<br><br>Whatever the cause, any disruption in your energy flow has an impact on your entire being. A block at one chakra will have an impact on how the others function, resulting in physical, emotional, and/or spiritual distress because all the chakras are intricately connected." +
      "<br><br>We develop psychological defence mechanisms that correspond to various types of energy blocks to protect ourselves from things that are too difficult for us to handle at the time. These defence mechanisms serve different purposes. They comprise: " +
      "<br><br><ul>" +
      "  <li>Suppressing Emotions, which frequently results in depression and despair (usually a heart chakra block)</li><br>" +
      "  <li>Compression and Compaction of Anger, which is thought to be dangerous if allowed to erupt (usually a solar plexus block)</li><br>" +
      "  <li>Freezing of Emotions, which frequently causes a lot of tension and a need to defend against any potential attacks going forward (usually a heart chakra block)</li><br>" +
      "  <li>Loss of Power and Energy, which makes the person appear helpless and in need of a lot of support from others, shielding them from having to take ownership of their actions and accept responsibility (solar plexus and/or sacral block)</li><br>" +
      "  <li>Denial, which is typically a result of fear, is when someone acts as though everything is fine when, in reality, there is extreme chaos that must be avoided at all costs to prevent a potential breakdown.</li><br>" +
      "</ul>" +
      "According to the situation they are in, many people use a combination of these blocks and switch between them. Everybody uses blocks occasionally to control the flow of energy based on what they feel they can handle. These temporary barriers can occasionally be a very helpful tool.<br>" +
      "<br>Entering therapy implies a request for the therapist to take all reasonable steps to aid in your recovery. But quite frequently, I've had to deal with the effects of mishandled therapy or ineffective attempts at recovery. You are in control, and even though therapy is frequently a painful process and there are unavoidably sensitive topics that must be discussed, if you sense that something is not right, heed that voice and at the very least talk to your therapist about it.<br>",
    createdBy : "Adarsh Sachdeva",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Reiki",
    tags: ["Reiki" , "Energy blocks", "Healing Chakras"],
    status : "active",
    img : "assets/img/blog/blog-06.jpg",
    doctor_name : "Adarsh Sachdeva",
    doctor_pic : "assets/img/doctors/doctor-thumb-02.jpg"
  },
  {
    id : 8,
    title : "What is long-distance Reiki and does it work?",
    description : "Three symbols are covered in Reiki training, one of which is the 'distance symbol.' This symbol is believed to enable the practitioner to send healing Reiki energy throughout time and space when used. The process of giving 'distance Reiki' and what to expect from a long-distance reiki session are described here." +
      "<br>Any distance in time or space can be crossed using the distance symbol. It enables practitioners to carry out reiki on a person who is not physically present and to remove blocks from someone's past. Distance The Hermetic Law of Similarity, an antiquated theory that asserts that because we are all made of energy and a part of a greater whole, we are all connected, is the basis for how Reiki operates. During a distance Reiki session, the practitioner can connect to the recipient's energy field by using this law.<br>" +
      "<br>Distance Reiki can be sent to anyone, anywhere, at any time, but it must first be granted in some way. I usually invite the recipient on a video call or use the recipient's photo and a healing crystal when I'm giving reiki to someone who isn't present. However, other practitioners might argue that these items are superfluous because Reiki energy can be sent to anyone just by focusing thoughts and energy in their direction.<br>" +
      "<br>I'll admit that when I first began conducting Reiki circles and distance healing, I had some scepticism. Nevertheless, it got simpler for me to establish energetic connections with the people I was working with as I practised throughout my training. People have asked me if I was just working on a specific area during sessions, which I frequently conduct over the phone, or have said things like, 'I felt my toes tingling just now.' Indeed, that would be the location of my workplace. No matter how far away you are, Reiki can increase your feelings of ease, happiness, and relaxation.<br>" +
      "<br>We all have access to the vital energy, also known as chi, qi, or prana, that flows through all other living things. One of the many ways to connect with and channel this energy for the therapeutic benefit of others is through distance Reiki.<br>",
    createdBy : "Arun Chopra",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Reiki",tags: ["Reiki" , "Online", "Distance"],
    status : "active",
    img : "assets/img/blog/blog-07.jpg",
    doctor_name : "Arun Chopra",
    doctor_pic : "assets/img/doctors/doctor-thumb-03.jpg"
  },
  {
    id : 9,
    title : "What is Past Life Regression Therapy ?",
    description : "Past life regression is a mild form of hypnotherapy that involves taking a person back in time to their prior lives, also known as incarnations. This is accomplished by accessing memories and experiences that are typically buried deep inside the subconscious mind of the individual being treated. These recollections are typically buried deep beneath the clamour of one's day-to-day thoughts due to the fact that modern life is so hectic and noisy. " +
      "<br>A subcategory of hypnotherapy known as past-life regression therapy asserts that we bring with us into this life emotional, psychic, and even, on occasion, physical evidence that is connected to previous incarnations. Past-life regression allows us to access these memories and work through them to find solutions to problems in the here-and-now." +
      "<br>The lessons we've learned, the perspectives we've adopted, and the dynamics of our relationships from past lifetimes are all unwittingly woven into our present lives. Remembering these events can help us dissipate the negative energy and emotions that have been holding us back. A typical past life regression therapy session consists of the therapist walking the client through the life's major events, the death experience, and a 'life review'.Here, from a more transcendental vantage point, one considers one's life's meaning, lessons, and choices." +
      "<br>Healing from past lives can have a positive effect on our present lives. Past life regression can help us see through the fog of this life. Past life regression allows us to heal and transform on the level of your higher consciousness, and it is typically far more rapid and effective than other forms of healing. Similarly, you can get in touch with your inner guidance and your identity's blueprint." +
      "<br>During a PLR session, you will be led away from the background noise and into a profoundly calm and serene condition. In this environment, it will be much simpler for you to access the memories that are stored in your subconscious mind. In this setting, it will be much easier for you to access the memories that are stored in your subconscious mind. This will make it easier for you to access and relive your birth, early childhood, and past lives. I can help you go back in time to the events that triggered the issues you're facing now, so you can finally resolve them. Healing occurs more rapidly when the patient has a thorough comprehension of the nature and origin of the problem. These moments of clarity can be life-changing and pave the way for rapid development here and now. It reveals parts of ourselves that were hidden in our unconscious, and when you do this, your whole view of life can change in a very deep way.",
    createdBy : "Arun Chopra",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Past Life Regression",tags: ["Past Life Regression" , "PLR", "Hypnotherapy"],
    status : "active",
    img : "assets/img/blog/blog-08.jpg",
    doctor_name : "Arun Chopra",
    doctor_pic : "assets/img/doctors/doctor-thumb-03.jpg"
  },
    {
      id : 10,
      title : "When should you explore the Past Life Regression Therapy ?",
      description : "One possible motivation for investigating a possible past life or lifetimes is to learn how a person's experiences from earlier times are influencing their current existence." +
        "<br><br>What difficulties do you have right now that might have their origins in a past existence?" +
        "<br>Have you been having trouble in your personal relationships? Do you have a problem with addiction?" +
        "<br>Are you mending the scars of your ancestors?" +
        "<br>Do you hope to end a reoccurring pattern of abuse in your life?" +
        "<br><br>All of these are very compelling arguments in favour of trying a Past Life Regression session. Your search for evidence of your past lives may also be motivated by a desire to reconnect with a dormant talent or a lost aspect of your personality. Perhaps you've forgotten your own strengths and talents, or you simply need a reminder of what they are before you can put them to use." +
        "<br>It is possible that a person is suffering from an illness or medical condition that has not yet been identified. Finding the origin of a problem in this life by investigating a possible prior existence is possible. A person may be able to let go of the suffering or illness they've been carrying into this existence after they have insight into their prior lives." +
        "<br><br>By clearing out negative energy patterns, PLRT can help people experience greater mental and emotional clarity, which can lead to greater insight into how to find fulfilment in this and future lives." +
        "<br>Traditional applications of past-life therapy include some of the most important topics, such as::"+
        "<br><br><ul>" +
        "  <li>Unhealthy patterns of thought and action that have persisted despite repeated efforts to reform</li><br>" +
        "  <li>Interpersonal relations that appear to take on a life of their own (strong feelings of attraction or dislike, ingrained conflicts that refuse to be resolved).</li><br>" +
        "  <li>Extreme worries, such as a dread of heights or water, that don't seem to have any rational basis in the here-and-now are known as phobias.</li><br>" +
        "  <li>Instances of persistent discomfort felt throughout the body.</li><br>" +
        "  <li>Persistent mental or emotional states that appear to follow you around.</li><br>" +
        "  <li>Irrational convictions like 'I have to do everything by myself', 'No one understands me', 'Life isn't fair', and 'Leave me alone'.</li><br>" +
        "</ul>",

      createdBy : "Anita Sachdeva",
      createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      comments : 12,
      type : "Past Life Regression",tags: ["Past Life Regression" , "PLR", "Hypnotherapy"],
      status : "active",
      img : "assets/img/blog/innerchild-blog.jpg",
      doctor_name : "Anita Sachdeva",
      doctor_pic : "assets/img/doctors/doctor-thumb-01.jpg"
    },
    {
      id : 11,
      title : "What are the benefits of Past Life Regression Therapy ?",
      description : "If you're interested in Past Life Therapy for whatever reason, you're bound to find some insights that help. Insight into specifics of this life and how a prior life or lives may be affecting you will be provided, albeit it may not come in the form you expect. The method creates a safe environment for accessing difficult emotions. The relaxed state of hypnosis might make a person feel more open to addressing their inner lives." +
        "<br><br>The effects of past life regression therapy (PLRT) are numerous and often transformative. PLRT can heal deeper and get results much more quickly than many other therapeutic approaches." +
        "<br><br>With the aid of past life regression, you may be able to:"+
        "<br><br><ul>" +
        "  <li>Get in touch with your prior selves.</li><br>" +
        "  <li>Give you insight into the meaning behind your emotional attachment to specific locations.</li><br>" +
        "  <li>Learn more about your current Soulmate and past life experiences.</li><br>" +
        "  <li>Recognize any physical problems you're experiencing; these may be relics from this or a previous existence.</li><br>" +
        "  <li>Investigate the buried feelings that have followed you into this life and given rise to irrational worries and convictions.</li><br>" +
        "  <li>Appreciate and implement the most important insights gained from their experiences.Appreciate and implement the most important insights gained from their experiences.</li><br>" +
        "  <li>Clear up emotional stress, physical problems, and trauma.</li><br>" +
        "  <li>Calm down anxious and/or sad feelings.</li><br>" +
        "  <li>Fix relationships that are hurting.</li><br>" +
        "  <li>Learn about and change habits, patterns, and routines.</li><br>" +
        "  <li>Find gifts and talents from a past life that have been dormant and use them in this life.</li><br>" +
        "  <li>Show you souls from past lives that you know from this life.</li><br>" +
        "  <li>Bring together your past life experiences and your soul's life lessons on a mental, emotional, and spiritual level.</li><br>" +
        "  <li>Find your spiritual centre again.</li><br>" +
        "  <li>Get spiritual direction and guidance.</li><br>" +
        "  <li>Find peace and wisdom that we don't always have access to in our earthly bodies.</li><br>" +
        "</ul>",
      createdBy : "Anita Sachdeva",
      createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      comments : 12,
      type : "Past Life Regression",tags: ["Past Life Regression" , "PLR", "Hypnotherapy"],
      status : "active",
      img : "assets/img/blog/blog-08.jpg",
      doctor_name : "Anita Sachdeva",
      doctor_pic : "assets/img/doctors/doctor-thumb-01.jpg"
    },
    {
      id : 12,
      title : "What to expect from a Past Life Regression Therapy session?",
      description : "A session of Past Life Regression Therapy can last between 2 and 3 hours. Most sessions have the following parts, which naturally fit together to make a full regression therapy experience." +
        "<br><br>We will start with a pre-consultation session, in which we will talk about your current life problems and what you want to get out of your PLRT session. We will talk about hypnotherapy and the process of past life regression therapy, and you are welcome to ask questions." +
        "<br><br>In the next session, PLRT will begin. You will be led to a past life that has something to do with your current problem. You will be able to see your body from a past life, the place you lived, the people you knew, and the important events and milestones of that life. We will look into any special issues we talked about ahead of time or that come up in the course of our conversation. You will be able to say what you see, what you hear, and how you feel. You will look at important life events, feelings, and relationships." +
        "<br><br>After the death of the past life, you will rise up and move into a higher level of spiritual awareness. From this more spiritual vantage point, you'll be able to see the bigger picture and understand what your past life was all about. You'll learn more about yourself and find out if your past life is affecting your present one." +
        "<br><br>We'll also walk you through the transformation process, where you'll be able to let go of all the stuck energy from traumas, events, etc., and lessen the effect that those things have on your life now." +
        "<br><br>At this point, sometimes the client's spirit guides, angels, or ancestors show up. You might be able to see how your past life has affected the growth of your soul and get other information that is important to your life now." +
        "<br><br>The session of past life regression therapy will end on its own, and we will go back to the present. We will also help you figure out how to use what you've learned and the energy of transformation in your everyday life to solve problems." +
        "<br>",
      createdBy : "Arun Chopra",
      createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      comments : 12,
      type : "Past Life Regression",tags: ["Past Life Regression" , "PLR", "Hypnotherapy"],
      status : "active",
      img : "assets/img/blog/blog-08.jpg",
      doctor_name : "Arun Chopra",
      doctor_pic : "assets/img/doctors/doctor-thumb-03.jpg"
    },
    {
      id : 13,
      title : "What is Family Constellation?",
      description : "Family Constellation is a powerful therapy that can help you see complicated connections in your family of origin as well as in the family or relationship you have now. FC reveals hidden dynamics in relationship systems, exposes ingrained patterns, and shows \"sticky\" relationships or situations. It changes the way people think about where problems come from and gives them ideas for how to move forward in ways that are strong and build." +
        "<br><br>Those who hold the issue can benefit from a new understanding, a different way of looking at things, a different set of options, or even a paradigm shift, thanks to the new viewpoints that become available." +
        "<br><br>In short, a constellation tries to get a system or person to move or focus on taking action instead of being stuck." +
        "<br><br>Bert Hellinger, a German psychologist, is the one who came up with the idea of family constellations. In the 1950s, when he was a missionary, Hellinger went to South Africa. He became interested in the Zulu way of life and a ceremony they used to communicate with each other. In Zulu culture, ancestors are holy, and healing the wounds of ancestors is important for strong family ties. He saw people in his family talk to each other honestly, without being passive-aggressive or getting angry. He wasn't used to seeing things like this in his own family back home." +
        "<br><br>This was not the final version of the family constellations method, but it was where the idea came from. Hellinger went back to Germany, where he spent the rest of his life studying how our family stories shape who we are. Most people who believe in family constellations are religious: It's more than just therapy to them. It's a way of life. It's seeing people from a different point of view and being okay with what you see (for example: learning to see your mother as a human being)." +
        "<br><br>In this kind of therapy, we look at each person as a part of a bigger system, like a family, rather than as a separate person. The way he acts, feels, and thinks as an individual must be understood in the context of this larger group. The person getting therapy chooses other people in the group to act as his or her real family members. The family constellation is a group with these people in it. The people who stand in for the person getting therapy hear about their family history or the problem that worries them. Then, the people playing the family members are asked to talk about how they feel or what they think about the relationship between the person getting therapy and the family members they are playing. This process often makes people feel like they understand and care about each other more.",
      createdBy : "Neha Arora",
      createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      comments : 12,
      type : "Family Constellation",tags: ["Family Constellation", "Hypnotherapy"],
      status : "active",
      img : "assets/img/blog/blog-09.jpg",
      doctor_name : "Anita Sachdeva",
      doctor_pic : "assets/img/doctors/doctor-thumb-04.jpg"
    },
    {
      id : 14,
      title : "When should you explore the Family Constellation Therapy?",
      description : "Your repeated problems follow a pattern. At some point, it becomes clear that you have some serious problems, and you start to realise that these problems have deeper causes." +
        "<br><br>Constellation work is a great way to figure out why things are going wrong in your life. Most of the time, these things happen because of a crazy family or because you were close to a crazy family member." +
        "<br><br>You might have a problem like depression or anxiety, and it might be because of your genes." +
        "<br><br>Family problems make you feel stuck in your life and put you in a tough spot. You can't grow and move forward in life because someone else isn't doing well." +
        "<br><br>Family Constellation Therapy looks at the family as a system and the person's role in that system. This can lead to a discussion about how family relationships from the past affect the present. Families often have rules or laws that aren't said out loud, and when someone doesn't follow them, it can cause problems. These are where our beliefs come from, even if they don't work for us anymore, aren't good for us, or aren't true." +
        "<br><br>This kind of therapy can be especially helpful for people who are depressed, anxious, or who use drugs. People often talk about a genetic predisposition to these problems or learned behaviours that can be passed down from one generation to the next. In Family Constellation Therapy, you might find that problems and behaviours you have now have roots in your ancestors that you didn't know about." +
        "<br><br>We think that family constellations work is most useful for dealing with problems that affect the whole system, be it worries about family of origin, problems between parents and children, or problems in close relationships. It could be used as a form of therapy for people who want to change the way they do things." +
        "<br>This is good for those who –" +
        "<br><br><ul>" +
        "  <li>Are trying to fix bad or harmful patterns in their relationships.</li><br>" +
        "  <li>Want to change their romantic relationship, work out family problems, or do both.</li><br>" +
        "  <li>Want to get rid of inner turmoil Have been through a big loss or trauma.</li><br>" +
        "  <li>Want to do well in their personal and professional lives.</li><br>" +
        "  <li>Deal with money problems.</li><br>" +
        "  <li>Family patterns or traumas from the past.</li><br>" +
        "</ul>" +
        "Family constellation therapy can also be used for more specific physical, mental, social, or spiritual problems, such as depression, anxiety, addictions, bad habits, failure at work, negative relationship patterns, family dysfunction, trauma, grief, obsessive thoughts, physical illnesses, financial problems, phobias, excessive guilt, etc.",
      createdBy : "Neha Arora",
      createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      comments : 12,
      type : "Family Constellation",tags: ["Family Constellation", "Hypnotherapy"],
      status : "active",
      img : "assets/img/blog/blog-09.jpg",
      doctor_name : "Anita Sachdeva",
      doctor_pic : "assets/img/doctors/doctor-thumb-04.jpg"
    }
]

    let services = [
      {
        id: 1,
        title: "Hypno therapy",
        description: "<p>Hypnosis is an effective and natural approach that allows for access to your subconscious mind by relaxing and bypassing the conscious mind. Hypnotherapy is the 'therapy' carried out during this altered state of awareness,\n" +
          "which can be used to help you gain control over patterns, behaviors, fears, thoughts, feelings, and actions. It can be a guide to past experiences and clarify causes/reasons. It can help you gain a better understanding of yourself and your relationships with others and it can provide a glimpse into future life experiences, goals, and life purpose. </p>",
        image: "assets/img/service-img1.jpg",
        service: "Hypnotherapy"
      },
      {
        id: 2,
        title: "Past Life Regression",
        description: "<p>PLR is a safe, intuitive, and healing way to gain a better understanding of self in this lifetime as it relates to previous life experiences. PLR is based on the idea of reincarnation. In essence, we are all pure and magical beings who come to the earth plane in order to learn lessons, gain experience, connect with our soul families and attain our true purpose, as well as to experience karmic lessons in order to grow and evolve. PLR is explored through hypnotic trance induction and you are guided through the experience in order to process and integrate.</p>",
        image: "assets/img/service-img2.jpg",
        service: "Past Life Regression"
      },
      {
        id: 3,
        title: "Inner Child Regression",
        description: "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
        image: "assets/img/service-img3.jpg",
        service: "Inner Child Regression"
      },
      {
        id: 4,
        title: "Ancestral Healing",
        description: "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
        image: "assets/img/service-img4.jpg",
        service: "Ancestral Healing"
      },
      {
        id: 5,
        title: "Family Constellation",
        description: "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
        image: "assets/img/service-img5.jpg",
        service: "Family Constellation"
      },
      {
        id: 6,
        title: "Reiki Healing",
        description: "<p>Reiki and energy healing is an ancient-inspired, modern method of healing emotional and physical problems.\n" +
          "There are seven main chakras, which you can think of as energy centers, which align the spine, starting from the base of the spine up to the crown of the head. Chakras filter energy continuously in and out of the body.\n" +
          "If any of the chakras become congested or completely blocked, then the fresh, positive, balancing energy that the mind, body & spirit needs to function properly cannot flow efficiently throughout our body.\n" +
          "Blockages in chakras and energy flow can lead to a variety of emotional, behavioral, and physical symptoms.\n" +
          "The goal of Reiki healing is to balance chakras to clear out any congestion or blockages in the chakras, thus reaching a healthy place of balance between mind, body, spirit, earth, health, universality, and grounding.</p>\n",
        image: "assets/img/service-img6.jpg",
        service: "Reiki"
      },
      {
        id: 7,
        title: "Midbrain Activation",
        description: "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
        image: "assets/img/service-img7.jpg",
        service: "Midbrain Activation"
      },
      {
        id: 8,
        title: "Sound Therapy",
        description: "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
        image: "assets/img/service-img8.jpg",
        service: "Sound Therapy"
      },
      {
        id: 9,
        title: "Other Therapies",
        nestedServices: [
          {
            id: 10,
            title: "Crystal Healing",
            description: "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
            image: "assets/img/service-img9.jpg",
            service: "Crystal Healing"
          },
          {
            id: 11,
            title: "Color Therapy",
            description: "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
            image: "assets/img/service-img10.jpg",
            service: "Color Therapy"
          },
          {
            id: 12,
            title: "Magneto Therapy",
            description: "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
            image: "assets/img/service-img7.jpg",
            service: "Magneto Therapy"
          },
          {
            id: 13,
            title: "Sujok Therapy",
            description: "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
            image: "assets/img/service-img8.jpg",
            service: "Sujok Therapy"
          },
          {
            id: 14,
            title: "Acupressure",
            description: "<p>PLR is a safe, intuitive, and healing way to gain a better understanding of self in this lifetime as it relates to previous life experiences. PLR is based on the idea of reincarnation. In essence, we are all pure and magical beings who come to the earth plane in order to learn lessons, gain experience, connect with our soul families and attain our true purpose, as well as to experience karmic lessons in order to grow and evolve. PLR is explored through hypnotic trance induction and you are guided through the experience in order to process and integrate.</p>",
            image: "assets/img/service-img9.jpg",
            service: "Acupressure"
          },
          {
            id: 15,
            title: "Breath work",
            description: "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
            image: "assets/img/service-img10.jpg",
            service: "Breath work"
          }
          ],
        service: "Other Therapies"
      }
      ]

  let transactions = [
      {
        id : 1,
        invoiceNumber  : '#IN0001',
        patient_id : '#PT0016',
        patient_name : 'George Anderson',
        profile : 'assets/img/patients/patient.jpg',
        total_amount : '$450.00',
        date: "Wed Nov 14 2020 09:41:48 GMT+0530 (India Standard Time)",
        status : 'paid'
      },
      {
        id : 2,
          invoiceNumber  : '#IN0002',
          patient_id : '#PT0001',
          patient_name : 'Megan Bird',
          profile : 'assets/img/patients/patient1.jpg',
          total_amount : '$200.00',
          date: "Wed Nov 13 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 3,
          invoiceNumber  : '#IN0003',
          patient_id : '#PT0002',
          patient_name : 'Alvin Boykin',
          profile : 'assets/img/patients/patient2.jpg',
          total_amount : '$100.00',
          date: "Wed Nov 12 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 4,
          invoiceNumber  : '#IN0004',
          patient_id : '#PT0003',
          patient_name : 'Nicholas Hicks',
          profile : 'assets/img/patients/patient3.jpg',
          total_amount : '$350.00',
          date: "Wed Nov 11 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 5,
          invoiceNumber  : '#IN0005',
          patient_id : '#PT0004',
          patient_name : 'Sherri McCarthy',
          profile : 'assets/img/patients/patient4.jpg',
          total_amount : '$275.00',
          date: "Wed Nov 10 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 6,
          invoiceNumber  : '#IN0006',
          patient_id : '#PT0005',
          patient_name : 'Roger Loyd',
          profile : 'assets/img/patients/patient5.jpg',
          total_amount : '$600.00',
          date: "Wed Nov 9 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 7,
          invoiceNumber  : '#IN0007',
          patient_id : '#PT0006',
          patient_name : 'Francis Giordano',
          profile : 'assets/img/patients/patient6.jpg',
          total_amount : '$50.00',
          date: "Wed Nov 8 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 8,
          invoiceNumber  : '#IN0008',
          patient_id : '#PT0007',
          patient_name : 'Kate Mason',
          profile : 'assets/img/patients/patient7.jpg',
          total_amount : '$400.00',
          date: "Wed Nov 7 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 9,
          invoiceNumber  : '#IN0009',
          patient_id : '#PT0008',
          patient_name : 'Glenn Johnson',
          profile : 'assets/img/patients/patient8.jpg',
          total_amount : '$550.00',
          date: "Wed Nov 6 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 10,
          invoiceNumber  : '#IN0010',
          patient_id : '#PT0009',
          patient_name : 'Monty Smith',
          profile : 'assets/img/patients/patient9.jpg',
          total_amount : '$100.00',
          date: "Wed Nov 5 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      }
  ]
    return {transactions:transactions,comments:comments,favourites:favourites,blogs:blogs,specialityList:specialityList,appointments:appointments,patientsAppointment:patientsAppointment,doctors:doctors,patients:patients,reviews:reviews,services:services};

   }
}
