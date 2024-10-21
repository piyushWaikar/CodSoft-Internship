import InternCard from "../InternCard";

const InternshipPostitions = () => {
  const internPositions = [
    {
      img: "https://assets.zyrosite.com/Aq20eV79zLfpXV6b/web_developing-dJoGejvV7nI9KNlO.gif",
      title: "Web Development",
      desc: "web development internship that provides practical work experience and an introduction to crafting and enhancing web-based systems. This opportunity offers engaging challenges and real-world projects, allowing you to gain hands-on experience in the dynamic fields of web and app development. Join our award-winning innovation team and kickstart your journey to success in a supportive and enriching environment.",
    },
    {
      img: "https://assets.zyrosite.com/Aq20eV79zLfpXV6b/mob-dev-AGBrMO8XElc08jln.gif",
      title: "Android Development",
      desc: "Android, the user-friendly open-source operating system, has transformed the way we access internet applications and carry out important tasks on our mobile devices. At CODSOFT, we understand the growing preference for mobile usage and offer the ideal starting point for your app development journey. Discover the simplicity of creating your first app with us and unlock a world of endless possibilities in the realm of mobile innovation.",
    },
    {
      img: "https://assets.zyrosite.com/Aq20eV79zLfpXV6b/data-science-2-mP4XPq0y3wUKory9.gif",
      title: "Data Science ",
      desc: "Remote Data Science Internships Are A Unique Chance To Gain Experience In The Midst Of The Virtual Workforce While Remaining Immersed In One Of The Top Organizations In The Field. Data Analysis Internships Are Some Of The Most Competitive And Popular Within The Broader Data Science Field.",
    },
    {
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=243,fit=crop/Aq20eV79zLfpXV6b/java_projects_for_beginners-AGBrMZgjljfZV2EE.jpg",
      title: "Java Programming",
      desc: "Become a Java programming master from the convenience of your own home and unlock incredible job prospects with our certification program. Join our comprehensive 4-week internship program, where you'll learn everything from web application development to deployment using Java Build a solid foundation for your career with hands-on training and real-world application in a supportive and collaborative environment.",
    },
    {
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=243,fit=crop/Aq20eV79zLfpXV6b/istock-1276643671-A1agppkaKqi8zzvj.jpg",
      title: "C++ Programming",
      desc: "Gain mastery in C++ programming from the comfort of your home and open doors to amazing job opportunities with our certification program. Enroll in our intensive 4-week internship, where you'll acquire knowledge in web application development and deployment using C++. Establish a strong base for your career and real-world implementation within a supportive and collaborative setting.",
    },
    {
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=166,h=163,fit=crop/Aq20eV79zLfpXV6b/images-m7VEv066lPuoGGkY.png",
      title: "Python Programming",
      desc: "Join our 4-week comprehensive internship program and master the fundamentals of programming in Python from the comfort of your own home. Gain the skills and knowledge to apply for exciting job opportunities in the field. In this program, you will learn everything from web development to the deployment of Python-based web applications. Get certified and enhance your career prospects. Don't miss this opportunity to excel in Python programming!",
    },
    {
      img: "https://assets.zyrosite.com/Aq20eV79zLfpXV6b/870a2f0a426751eac1fc9cefcd97be78-m7VE6evebnsJWr3w.gif",
      title: "UI/UX Design",
      desc: "Gain mastery in UI/UX Design from the comfort of your home and open doors to amazing job opportunities with our certification program. Enroll in our intensive 4-week internship, where you'll acquire knowledge in web application development and deployment . Establish a strong base for your career and real-world implementation within a supportive and collaborative setting.",
    },
    {
      img: "https://assets.zyrosite.com/Aq20eV79zLfpXV6b/9d7b99_dfcb8e88751c4cecb7ac677976976ec8~mv2-mP4Xa8xEPPTLEoVx.gif",
      title: "Artificial intelligence",
      desc: "Gain mastery in Artificial intelligence from the comfort of your home and open doors to amazing job opportunities with our certification program. Enroll in our intensive 4-week internship, where you'll acquire knowledge in web application development and deployment . Establish a strong base for your career and real-world implementation within a supportive and collaborative setting.",
    },
    {
      img: "https://assets.zyrosite.com/Aq20eV79zLfpXV6b/creative-m5KWqZZQ0ZF2RNjg.gif",
      title: "Machine learning",
      desc: "Gain mastery in Machine learning from the comfort of your home and open doors to amazing job opportunities with our certification program. Enroll in our intensive 4-week internship, where you'll acquire knowledge in web application development and deployment . Establish a strong base for your career and real-world implementation within a supportive and collaborative setting.",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-16 my-16">
      <h1 className="text-3xl underline font-bold">INTERNSHIP POSITIONS</h1>
      <div className="grid grid-cols-1 w-[90%] gap-16 sm:grid-cols-1 sm:w-[60%] sm:gap-16 md:grid-cols-2 md:gap-20 lg:grid-cols-3 lg:gap-20 md:w-[90%]">
        {internPositions.map((position) => (
          <InternCard
            img={position.img}
            title={position.title}
            desc={position.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default InternshipPostitions;
