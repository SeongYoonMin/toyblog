import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig().public;
  const body: {
    name: string;
    type: string;
    company: string;
    email: string;
    phone: string;
    inquiry: string;
    date: string;
  } = await readBody(event);
  const transporter = nodemailer.createTransport({
    service: "NAVER", // 서비스이름
    host: "smtp.naver.com", // 메일 서버 도메인
    port: 587, // 메일 서버 포트
    secure: false, // TLS 사용 여부
    auth: {
      user: config.mail_user, // 이메일 주소
      pass: config.mail_pass, // 이메일 비밀번호
    },
  });
  try {
    const mail = await transporter.sendMail({
      from: "namo4862@naver.com",
      to: "namo4862@naver.com",
      subject: "UNI's BLOG 문의입니다.",
      html: `<p>이름 : ${body.name}</p><br/>
      <p>문의일 : ${body.date}</p><br/>
      <p>회사: ${body.company}</p><br/>
      <p>이메일: ${body.email}</p><br/>
      <p>전화 번호: ${body.phone}</p><br/>
      <p>문의 종류: ${body.type}</p><br/>
      <p>문의 내용: ${body.inquiry}</p><br/>
      `,
    });
    return {
      status: true,
      message: "문의가 성공적으로 전송되었습니다.",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "에러가 발생하였습니다. 다시 시도해주세요.",
    };
  }
});
