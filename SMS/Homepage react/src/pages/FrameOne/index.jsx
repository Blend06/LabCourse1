import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";

export default function FrameOnePage() {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <div className="flex flex-col items-start">
          <header className="flex justify-space-between self-stretch bg-gray-100 shadow-xs sm:p-5">
            <div className="mx-auto mb-1 flex w-full max-w-[1361px] justify-between gap-5 md:flex-col">
              <div className="flex  items-center justify-center sm:flex-col">
                <Img
                  src="images/img_rectangle_2.png"
                  alt="image"
                  className="h-[130px] w-[38%] object-cover sm:w-full"
                />
                <Heading size="md" as="h1" className="uppercase">
                  AcademiaNet
                </Heading>
              </div>
              <div className="mb-[22px] flex w-[34%] items-center justify-between gap-5 self-end md:w-full">
                <Button
                  shape="round"
                  color="blue_100_6d_gray_100_6d"
                  leftIcon={<Img src="images/img_rectangle_6.png" alt="Rectangle 6" className="h-[39px] w-[39px]" />}
                  className="gap-[7px] font-jacquesfrancois uppercase sm:px-5"
                >
                  Contact
                </Button>
                <Button
                  size="sm"
                  shape="square"
                  leftIcon={<Img src="images/img_rectangle_3.png" alt="Rectangle 3" className="h-[67px] w-[70px]" />}
                  className="gap-4 font- uppercase text-black-900 sm:pr-5"
                >
                  Login
                </Button>
              </div>
            </div>
          </header>
          <div className="relative mt-[-1px] flex h-[672px] items-center justify-center self-stretch bg-[url(/public/images/img_group_9.png)] bg-cover bg-no-repeat p-[35px] md:h-auto sm:p-5">
            <div className="mx-auto my-6 flex w-full max-w-[1319px] items-center justify-between gap-5 md:flex-col">
              <div className="relative mb-[23px] h-[422px] w-[58%] self-end md:h-auto md:w-full">
                <Heading size="lg" as="h1" className="!text-indigo-900">
                  <span className="text-indigo-900">
                    <>
                      Student Success Starts Here
                      <br />
                    </>
                  </span>
                  <span className="text-[37px] font-normal italic text-indigo-900">
                    Is more than just a slogan—it&#39;s our guiding principle
                  </span>
                </Heading>
                <Button variant="fill" shape="round" className="absolute bottom-[36%] left-[31%] m-auto font-black">
                  Learn More
                </Button>
              </div>
              <Img
                src="images/img_rectangle_7.png"
                alt="image_one"
                className="h-[553px] w-[31%] object-cover md:w-full"
              />
            </div>
          </div>
          <div className="relative ml-[3px] h-[243px] self-stretch bg-gray-50 px-[11px] pt-[11px] md:ml-0">
            <Img
              src="images/img_vector_1.png"
              alt="vectorone_one"
              className="absolute bottom-[9.00px] left-[11.00px] m-auto h-[200px] w-[18%] rounded-lg object-cover"
            />
            <Img
              src="images/img_vector_2.png"
              alt="vectortwo_one"
              className="absolute bottom-[11.00px] right-[15.00px] m-auto h-[220px] w-[19%] rounded-lg object-cover"
            />
            <Heading as="h2" className="absolute bottom-[50.00px] left-0 right-0 m-auto w-[87%] text-center">
              We believe in improving school management through service and technology, and we’ve never lost sight of
              our goal — to help schools, administrators, teachers, and families solve the unique challenges they face.
            </Heading>
          </div>
          <div className="relative ml-[3px] h-[673px] self-stretch md:ml-0 md:h-auto">
            <Img
              src="images/img_polygon_4.svg"
              alt="polygonfour_one"
              className="mr-[559px] mt-[111px] h-[20px] md:mr-0"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[673px] w-full bg-gradient1 p-[21px] sm:p-5">
              <div className="absolute bottom-[11%] left-[3%] m-auto h-[430px] w-[44%]">
                <div className="absolute right-[0.00px] top-[13%] m-auto flex w-[89%] justify-center rounded-[80px] bg-blue_gray-100_3f p-4 shadow-sm">
                  <Heading as="h2" className="mb-[225px] text-center">
                    Schedule management
                  </Heading>
                </div>
                <Heading as="h3" className="absolute bottom-[150.00px] right-[9%] m-auto w-[72%] text-center !font-bold">
                  Allow students and staff to view their class schedules and other school activities.
                </Heading>
                <Img
                  src="images/img_rectangle_19.png"
                  alt="image_two"
                  className="absolute left-[0.00px] top-[0.00px] m-auto h-[133px] w-[30%] object-cover"
                />
              </div>
              <div className="absolute left-0 right-0 top-[16%] m-auto flex w-[25%] flex-wrap items-end justify-between gap-5">
                <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="mb-[9px] h-[20px]" />
                <Heading as="h4" className="text-center">
                  Our Solutions
                </Heading>
                <Img src="images/img_polygon_5.svg" alt="polygonfive_one" className="mb-2 h-[20px]" />
              </div>
              <div className="absolute bottom-[22%] right-[8%] m-auto flex w-[41%] justify-center rounded-[80px] bg-blue_gray-100_3f p-[11px] shadow-sm">
                <Heading as="h5" className="mb-[233px] text-center">
                  Grades{" "}
                </Heading>
              </div>
              <Heading as="h6" className="absolute bottom-[30%] right-[9%] m-auto w-[39%] text-center !font-bold">
                Enable students to access their grades for tests, homework assignments, and exams, as well as provide a
                system for assessing academic work and offering feedback.
              </Heading>
              <Img
                src="images/img_rectangle_20.png"
                alt="image_three"
                className="absolute right-[21.00px] top-[20%] m-auto h-[180px] w-[16%] object-cover"
              />
            </div>
          </div>
          <div className="ml-[25px] mt-[25px] flex flex-col items-center self-stretch md:ml-0">
            <div className="relative z-[1] flex flex-wrap items-start sm:flex-col">
              <Img src="images/img_polygon_4.svg" alt="polygonone_one" className="mt-[13px] h-[20px] sm:w-full" />
              <Text
                size="s"
                as="p"
                className="mb-[40px] ml-[26px] text-center !font-itim uppercase !text-pink-600 sm:ml-0 sm:p-5"
              >
                A Message for Families
              </Text>
              <Img
                src="images/img_arrow_down.svg"
                alt="arrowdown_three"
                className="ml-[35px] mt-[9px] h-[20px] sm:ml-0 sm:w-full"
              />
            </div>
            <Text size="s" as="p" className="relative mt-[-45px] text-center !font-itim uppercase">
              <span className="text-3xl text-black-900">
                <>
                  Our goal is to elevate the education experience for you and your students by keeping you connected to
                  your students’ school, their activities, and their educational progress.
                  <br />
                </>
              </span>
              <a href="#" className="text-black-900 underline">
                <>
                  <br />
                </>
              </a>
            </Text>
          </div>
          <footer className="ml-3.5 flex w-[94%] items-center justify-center md:ml-0 md:w-full md:flex-col md:p-5">
            <Img
              src="images/img_rectangle_2.png"
              alt="image_four"
              className="h-[95px] w-[10%] object-cover md:w-full"
            />
            <div className=" mt-[25px] flex flex-1 flex-col items-start md:self-stretch">
              <Heading size="xs" as="h4" className="uppercase">
                AcademiaNet
              </Heading>
              <div className="mx-auto flex w-full max-w-[930px] items-start justify-between gap-5 self-end md:flex-col md:p-5">
                <div className="flex flex-col items-start gap-2">
                  <Heading as="h3" className="ml-2 uppercase md:ml-0">
                    company
                  </Heading>
                  <ul className="flex flex-col items-start gap-[7px]">
                    <li>
                      <a href="#">
                        <Text as="p" className="text-center uppercase">
                          about us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-center uppercase">
                          contact us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-center uppercase">
                          news
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex w-[66%] flex-col items-start gap-2 md:w-full">
                  <div className="flex w-[94%] flex-wrap justify-between gap-5 self-end md:w-full">
                    <a href="#">
                      <Heading as="h3" className="text-center uppercase">
                        contact us
                      </Heading>
                    </a>
                    <a href="#">
                      <Heading as="h3" className="uppercase">
                        follow us
                      </Heading>
                    </a>
                  </div>
                  <div className="flex w-[89%] items-start justify-between gap-5 md:w-full">
                    <Text as="p" className="w-[51%] text-center uppercase">
                      <>
                        +38344222222
                        <br />
                        +38349279342
                        <br />
                        6:30 am – 5:00 pm
                      </>
                    </Text>
                    <div className="flex w-[5%] flex-col gap-[27px]">
                      <div className="rounded-[15px] bg-blue_gray-100_01">
                        <Img
                          src="images/img_ellipse_2.png"
                          alt="circleimage"
                          className="h-[30px] w-[30px] rounded-[50%]"
                        />
                      </div>
                      <Img
                        src="images/img_ellipse_3.png"
                        alt="circleimage_one"
                        className="h-[30px] w-[30px] rounded-[50%]"
                      />
                      <Img
                        src="images/img_ellipse_4.png"
                        alt="circleimage_two"
                        className="h-[30px] w-[30px] rounded-[50%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
