import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Input, Heading, Button } from "../../components";

export default function DesktopTwoPage() {
  return (
    <>
      <Helmet>
        <title>Blend's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col gap-[15px] border border-solid border-black-900_99 bg-gradient1 pb-[47px] md:pb-5">
        <header className="flex items-center justify-center bg-gray-100 p-[21px] shadow-xs sm:p-5">
          <div className="mx-auto flex w-full max-w-[1329px] justify-center">
            <div className="flex w-full items-center justify-between gap-5 md:flex-col">
              <div className="flex w-[34%] items-center justify-center md:w-full sm:flex-col">
                <Img
                  src="images/img_rectangle_2.png"
                  alt="image"
                  className="h-[130px] w-[38%] object-cover sm:w-full"
                />
                <Heading size="xs" as="h1" className="uppercase">
                  AcademiaNet
                </Heading>
              </div>
              <div className="mb-5 flex w-[32%] items-start justify-between gap-5 self-end md:w-full">
                <Button
                  shape="round"
                  color="blue_100_6d_gray_100_6d"
                  leftIcon={<Img src="images/img_rectangle_6.png" alt="Rectangle 6" className="h-[39px] w-[39px]" />}
                  className="min-w-[213px] gap-[7px] font-jacquesfrancois uppercase sm:px-5"
                >
                  Contact
                </Button>
                <Button
                  size="md"
                  shape="square"
                  leftIcon={
                    <Img src="images/img_rectangle_26.png" alt="Rectangle 26" className="mr-[-3px] h-[67px] w-[65px]" />
                  }
                  className="min-w-[181px] font-jacquesfrancois uppercase text-black-900_cc sm:pr-5"
                >
                  FAQ
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex w-[97%] flex-col items-center md:w-full md:p-5">
          <div className="mr-[206px] flex w-[63%] flex-col items-start self-end md:mr-0 md:w-full">
            <Heading size="s" as="h1" className="text-shadow-ts capitalize">
              <>
                Log in to your school
                <br />
              </>
            </Heading>
            <Text
              size="2xl"
              as="p"
              className="relative ml-[177px] mt-[-27px] text-center uppercase !text-deep_purple-A400 md:ml-0"
            >
              i am
            </Text>
          </div>
          <div className="mt-[18px] flex w-[29%] justify-between gap-5 md:w-full">
            <Img src="images/img_ellipse_4.png" alt="circleimage" className="h-[112px] w-[29%] rounded-[50%]" />
            <Img src="images/img_ellipse_3.png" alt="circleimage_one" className="h-[112px] w-[29%] rounded-[50%]" />
            <Img src="images/img_ellipse_2.png" alt="circleimage_two" className="h-[112px] w-[29%] rounded-[50%]" />
          </div>
          <div className="relative mt-[11px] h-[579px] w-[37%]">
            <div className="absolute left-[20%] top-[37%] m-auto flex flex-col">
              <Text size="md" as="p" className="capitalize !text-indigo-900">
                username:
              </Text>
              <Text size="md" as="p" className="relative mt-[-28px] capitalize !text-indigo-900">
                username:
              </Text>
            </div>
            <Text size="md" as="p" className="absolute left-[20%] top-[19%] m-auto capitalize !text-indigo-900">
              School-ID:
            </Text>
            <div className="absolute bottom-[41%] left-[20%] m-auto flex flex-col">
              <Text size="md" as="p" className="capitalize !text-indigo-900">
                password:
              </Text>
              <Text size="md" as="p" className="relative mt-[-28px] capitalize !text-indigo-900">
                password:
              </Text>
            </div>
            <div className="absolute bottom-[23%] left-0 right-0 m-auto flex w-[62%] flex-col items-end gap-9">
              <div className="flex justify-between gap-5 self-stretch">
                <div className="flex flex-col self-start">
                  <Text as="p" className="text-center capitalize">
                    remember me
                  </Text>
                  <div className="relative mt-[-17px] flex flex-col">
                    <Text as="p" className="text-center capitalize">
                      remember me
                    </Text>
                    <Text as="p" className="relative mt-[-17px] text-center capitalize">
                      remember me
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col self-end">
                  <a href="#">
                    <Text as="p" className="text-center capitalize underline">
                      forgot Password?
                    </Text>
                  </a>
                  <div className="relative mt-[-17px] flex flex-col">
                    <a href="#">
                      <Text as="p" className="text-center capitalize underline">
                        forgot Password?
                      </Text>
                    </a>
                    <a href="#" className="relative mt-[-17px]">
                      <Text as="p" className="text-center capitalize underline">
                        forgot Password?
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mr-[23px] flex flex-col md:mr-0">
                <a href="#">
                  <Text as="p" className="text-center capitalize">
                    log in
                  </Text>
                </a>
                <div className="relative mt-[-17px] flex flex-col">
                  <a href="#">
                    <Text as="p" className="text-center capitalize">
                      log in
                    </Text>
                  </a>
                  <a href="#" className="relative mt-[-17px]">
                    <Text as="p" className="text-center capitalize">
                      log in
                    </Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute right-[10%] top-[16%] m-auto flex w-[73%] rounded-[10px] bg-blue_gray-100 p-[15px]">
              <div className="flex flex-col">
                <Text size="md" as="p" className="capitalize !text-indigo-900">
                  School-ID:
                </Text>
                <Text size="md" as="p" className="relative mt-[-28px] capitalize !text-indigo-900">
                  School-ID:
                </Text>
              </div>
            </div>
            <Input
              shape="round"
              type="text"
              name="userName"
              placeholder={`username:`}
              className="absolute right-[10%] top-[34%] m-auto w-[73%] capitalize sm:pr-5"
            />
            <Input
              shape="round"
              type="password"
              name="password"
              placeholder={`password:`}
              className="absolute bottom-[39%] right-[10%] m-auto w-[73%] capitalize sm:pr-5"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center rounded-[5px] border-4 border-solid border-black-900_7f px-14 py-[85px] shadow-sm md:p-5">
              <div className="mb-[41px] mt-[22px] flex w-[84%] flex-col items-start md:w-full">
                <Text size="md" as="p" className="ml-[11px] capitalize !text-indigo-900 md:ml-0">
                  School-ID:
                </Text>
                <Text size="md" as="p" className="ml-[11px] mt-[77px] capitalize !text-indigo-900 md:ml-0">
                  username:
                </Text>
                <Text size="md" as="p" className="ml-[11px] mt-[71px] capitalize !text-indigo-900 md:ml-0">
                  password:
                </Text>
                <div className="mt-[34px] flex justify-between gap-5 self-stretch">
                  <div className="flex w-[30%] items-start justify-center gap-0.5 self-start">
                    <div className="mt-[3px] h-[10px] w-[13px] rounded border border-solid border-black-900_02 bg-blue_gray-100" />
                    <Text as="p" className="text-center capitalize">
                      remember me
                    </Text>
                  </div>
                  <a href="#" className="self-end">
                    <Text as="p" className="text-center capitalize underline">
                      forgot Password?
                    </Text>
                  </a>
                </div>
                <Button
                  size="xs"
                  variant="fill"
                  className="mt-[27px] min-w-[88px] self-end rounded font-itim capitalize sm:px-5"
                >
                  log in
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-[79px] h-px w-full self-stretch bg-black-900_33" />
          <div className="mx-auto mt-[23px] flex w-full max-w-[1079px] flex-col items-start">
            <Text size="xl" as="p" className="ml-[5px] capitalize !text-black-900_99 md:ml-0">
              <span className="font-black text-black-900_99">AcademiaNet</span>
              <span className="font-black text-black-900_99">
                <>
                  &nbsp;Customer Support
                  <br />
                </>
              </span>
            </Text>
            <Heading as="h2" className="ml-[5px] mt-[21px] w-[98%] capitalize !text-deep_purple-A400 md:ml-0 md:w-full">
              <span className="text-deep_purple-A400">
                <>
                  Frequently Asked Questions:
                  <br />
                </>
              </span>
              <span className="text-3xl text-black_900">
                <>
                  Did you forget your AcademiaNet username?
                  <br />
                </>
              </span>
              <span className="font-timesnewroman text-[29px] font-normal uppercase text-black_900_01">Y</span>
              <span className="font-timesnewroman text-[29px] font-normal lowercase text-black_900_01">
                our username was included in your account activation email. If you no longer have access to that email
                anymore, please contact your school directly and ask them to provide your username for you.&nbsp;
              </span>
              <span className="font-timesnewroman text-[29px] font-normal text-black_900_01">F</span>
              <span className="font-timesnewroman text-[29px] font-normal lowercase text-black_900_01">
                or security purposes,&nbsp;
              </span>
              <span className="font-timesnewroman text-[29px] font-normal text-black_900_01">AcademiaNet</span>
              <span className="font-timesnewroman text-[29px] font-normal lowercase text-black_900_01">
                &nbsp;cannot share or modify users’ account details.
              </span>
            </Heading>
            <div className="mt-[35px] h-[5px] self-stretch bg-black-900_02" />
            <div className="relative ml-[5px] mt-9 h-[438px] self-stretch md:ml-0 md:h-auto">
              <div className="absolute left-0 right-0 top-[0.00px] m-auto w-full">
                <div className="flex flex-col">
                  <Heading as="h3" className="capitalize">
                    <span className="text-3xl text-black-900_02">
                      <>
                        Did you forget your password?
                        <br />
                      </>
                    </span>
                    <span className="font-timesnewroman text-[29px] font-normal lowercase text-black-900_02">
                      Reset your password by clicking on the “forgot password” link on the log in page of your school. *
                    </span>
                  </Heading>
                  <div className="relative ml-[338px] mt-[-94px] flex w-[30%] flex-col gap-[27px] md:ml-0 md:w-full">
                    <Input size="xs" shape="round" name="edittext" className="sm:pr-5" />
                    <div className="h-[34px] rounded-[10px] bg-blue_gray-100" />
                  </div>
                </div>
              </div>
              <div className="mb-[71px] ml-[338px] flex w-[20%] flex-col items-start gap-0.5 md:ml-0">
                <div className="h-[34px] self-stretch rounded-[10px] bg-blue_gray-100" />
                <div className="ml-1.5 flex w-[33%] items-center md:ml-0 md:w-full">
                  <div className="mb-0.5 h-[6px] w-[7px] self-end rounded-[3px] border border-solid border-black-900_02 bg-blue_gray-100" />
                  <Text size="xs" as="p" className="text-center capitalize">
                    remember me
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[0.00px] left-[27%] m-auto flex w-[36%] items-center sm:relative sm:flex-col">
                <div className="flex flex-1 flex-col items-end justify-end rounded-[5px] border-4 border-solid border-black-900_7f p-11 shadow-sm md:p-5 sm:self-stretch">
                  <div className="ml-[13px] mt-[19px] flex flex-col items-center gap-[45px] self-start md:ml-0">
                    <Text size="xs" as="p" className="capitalize !text-indigo-900">
                      school-iD:
                    </Text>
                    <Text size="xs" as="p" className="capitalize !text-indigo-900">
                      username:
                    </Text>
                    <Text size="xs" as="p" className="self-start capitalize !text-indigo-900">
                      password:
                    </Text>
                  </div>
                  <div className="mt-[9px] flex rounded-[46px] border border-solid border-red-A700_01">
                    <a href="#" className="self-start">
                      <Text size="xs" as="p" className="text-center capitalize underline">
                        forgot Password?
                      </Text>
                    </a>
                  </div>
                  <Text
                    size="xs"
                    as="p"
                    className="text-shadow-ts mb-1 mr-3 flex h-[18px] items-center justify-center rounded bg-light_blue-400 px-2.5 py-[3px] text-center capitalize !text-white-A700_01 md:mr-0"
                  >
                    log In
                  </Text>
                </div>
                <Img
                  src="images/img_arrow_1.svg"
                  alt="arrowone_one"
                  className="relative mb-6 ml-[-31px] h-[50px] w-[34%] self-end sm:ml-0 sm:w-full"
                />
              </div>
            </div>
            <Text
              size="lg"
              as="p"
              className="ml-[5px] mt-[27px] w-[98%] !font-timesnewroman lowercase md:ml-0 md:w-full"
            >
              <>
                If you do not receive an email after 15 minutes (please check your spam filter – emails come from
                notifications@academianet.com), you may have entered your username or email incorrectly. Please contact
                the school directly to reset your password. For security purposes, academianet cannot share or modify
                users’ account details.
                <br />
                ** Make sure that you are logging into the correct school
              </>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
