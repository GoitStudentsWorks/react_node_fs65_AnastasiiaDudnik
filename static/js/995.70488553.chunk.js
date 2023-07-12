"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[995],{35995:function(e,r,i){i.r(r),i.d(r,{default:function(){return Y}});var n=i(29439),a=i(72791),o=i(59434),l=i(84217),t=i(69273),s=i(55705),d=i(20890),x=i(64554),p=i(93044),h=i(99259),u=i(76098),c=i(36151),m=i(79348),f=i(8007),g=i(86865),F=i(72426),b=i.n(F),v=i(97892),y=i.n(v),j=i(80184),Z=" rgba(17, 17, 17, 0.15)",S="#E74A3B",k=function(e){return(0,j.jsx)(d.Z,{sx:{fontSize:12,lineHeight:"14px",color:"#DA1414",marginTop:"8px"},children:e})},A=function(e){if(e)return e;var r=new Date;return b()(r).format("DD/MM/YYYY")},R=f.Ry().shape({username:f.Z_().min(2,"Too Short name!").max(35,"Too Long name!").required("Name is required"),birthday:f.Z_().notRequired(),email:f.Z_().email("Invalid email").required("Email is required"),phone:f.Z_().min(14,"Too Short name!").max(14,"Too Long name!").notRequired(),skype:f.Z_().min(11,"Too Short name!").max(16,"Too Long name skype!").matches(/^\+[1-9]\d{0,2}[.-]?\d{1,14}$/,{message:"Invalid skype name"}).notRequired()}),D=function(e){var r=e.mode,i=(0,o.v9)(l.dy),f=(0,a.useState)({}),F=(0,n.Z)(f,2),v=F[0],D=F[1],w=(0,a.useState)(!0),C=(0,n.Z)(w,2),Y=C[0],z=C[1],B=(0,o.I0)(),L={username:i.name,avatarURL:i.avatarURL||"",email:i.email,birthday:A(i.birthday),phone:i.phone||"",skype:i.skype||""},U=(0,s.TA)({initialValues:L,validationSchema:R,onSubmit:function(e){B((0,t.Nq)(e))}}),T=function(e){var r=e.target,i=r.name,n=r.value;U.setFieldValue(i,n),z(!0)},_=function(e){return U.touched[e]&&U.errors[e]?"is-invalid":U.touched[e]?"is-valid":""};return(0,j.jsx)("form",{onSubmit:U.handleSubmit,children:(0,j.jsxs)(x.Z,{sx:{width:{xs:"335px",md:"704px",lg:"1087px"},borderRadius:"16px",padding:{xs:"59px 0px 40px 0px",md:"40px 0px 40px 0px"},marginLeft:"auto",marginRight:"auto",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"light"===r?"#21222C":"#fff"},children:[(0,j.jsxs)(x.Z,{children:[(0,j.jsx)(p.Z,{alt:"avatar",src:v.path?v.path:i.avatarURL,sx:{width:{xs:"72px",md:"124px"},height:{xs:"72px",md:"124px"},backgroundColor:"#F8F8F8",border:"2px solid #3E85F3",mr:"auto",ml:"auto",mb:"18px",position:{xs:"absolute",md:"relative"},top:{xs:"-36px",md:0},left:{xs:"132px",md:0}},children:(0,j.jsx)(h.Z,{stroke:"currentColor",sx:{width:"48px",height:"48px"},children:(0,j.jsx)("use",{href:"".concat(m.Z,"#userAvatar")})})}),(0,j.jsxs)(x.Z,{sx:{position:"absolute",top:{xs:"4%",md:"150px",lg:"150px"},right:{xs:"40%",md:"44%",lg:"46%"},cursor:"pointer"},children:[(0,j.jsx)("input",{id:"avatarURL",type:"file",name:"avatarURL",onChange:function(e){var r=e.currentTarget.files[0],i=URL.createObjectURL(r);D({path:i,file:r}),U.setFieldValue("avatarURL",r),z(!0)},onBlur:U.handleBlur,style:{display:"none"}}),(0,j.jsx)("label",{htmlFor:"avatarURL",children:(0,j.jsx)(h.Z,{stroke:"currentColor",style:{cursor:"pointer"},children:(0,j.jsx)("use",{href:"".concat(m.Z,"#addAvatar")})})})]})]}),(0,j.jsx)(d.Z,{sx:{color:"light"===r?"#fff":"#111",fontSize:"14px",fontWeight:700,lineHeight:"18px",textAlign:"center"},children:i.name}),(0,j.jsx)(d.Z,{sx:{color:"light"===r?"#fff":"#111"},children:"User"}),(0,j.jsxs)(x.Z,{sx:{display:"flex",gap:{xs:"18px",md:"26px",lg:"50px"},flexDirection:{xs:"column",lg:"row"},width:{xs:"299px",md:"354px",lg:"758px"},justifyContent:{lg:"center"},mt:{xs:"40px",lg:"44px"}},children:[(0,j.jsxs)(x.Z,{sx:{display:"flex",flexDirection:"column",gap:{xs:"18px",md:"24px"}},children:[(0,j.jsxs)("label",{children:[(0,j.jsx)(d.Z,{sx:{color:"light"===r?"#FAFAFA4D":"#111",fontSize:"12px",lineHeight:"14px",mb:"8px"},children:"User Name"}),(0,j.jsx)(u.ZP,{onChange:T,onBlur:U.handleBlur,value:U.values.username,placeholder:"User Name",name:"username",type:"text",sx:{width:{xs:"100%",lg:"354px"},fontSize:"14px",fontWeight:600,color:"light"===r?"#fff":"#111",borderRadius:"8px",padding:"8px 18px","&:hover":{border:"1px solid #000 "},"&:focus ":{border:"1px solid#000 "},border:"".concat("light"===r?"is-invalid"===_("username")&&S||"#FFFFFF26":"is-invalid"===_("username")&&S||Z," solid 1px")}}),U.errors.username&&U.touched.username&&k(U.errors.username)]}),(0,j.jsxs)("label",{children:[(0,j.jsx)(d.Z,{sx:{color:"light"===r?"#FAFAFA4D":"#111",fontSize:"12px",lineHeight:"14px",mb:"8px"},children:"Birthday"}),(0,j.jsx)(g.M,{onChange:function(e){e||U.setFieldValue("birthday","");var r=b()(e.$d).format("YYYY/MM/DD");U.setFieldValue("birthday",r),z(!0)},defaultValue:y()(U.values.birthday),name:"birthday",format:"DD/MM/YYYY",placeholder:"DD/MM/YYYY",sx:{width:"100%",fontSize:"14px",border:"".concat("light"===r?"is-invalid"===_("username")&&S||"#FFFFFF26":"is-invalid"===_("username")&&S," solid 1px"),borderRadius:"8px","&>div>input":{padding:"13px 14px",fontWeight:600,color:"light"===r?"#fff":"#111"},"&>div":{borderRadius:"8px"},svg:{color:"light"===r?"#fff":"#111"}}}),U.errors.birthday&&U.touched.birthday&&k(U.errors.birthday)]}),(0,j.jsxs)("label",{children:[(0,j.jsx)(d.Z,{sx:{color:"light"===r?"#FAFAFA4D":"#111",fontSize:"12px",lineHeight:"14px",mb:"8px"},children:"Email"}),(0,j.jsx)(u.ZP,{onChange:T,onBlur:U.handleBlur,value:U.values.email,type:"email",name:"email",placeholder:"Email",sx:[{width:"100%",fontSize:"14px",fontWeight:600,color:"light"===r?"#fff":"#111",border:"".concat("light"===r?"is-invalid"===_("username")&&S||"#FFFFFF26":"is-invalid"===_("username")&&S||Z," solid 1px"),borderRadius:"8px",padding:"8px 18px","&:hover":{border:"1px solid #000 "},"&:focus ":{border:"1px solid#000 "}}]}),U.errors.email&&U.touched.email&&k(U.errors.email)]})]}),(0,j.jsxs)(x.Z,{sx:{display:"flex",flexDirection:"column",gap:{xs:"18px",md:"24px"}},children:[(0,j.jsxs)("label",{children:[(0,j.jsx)(d.Z,{sx:{color:"light"===r?"#FAFAFA4D":"#111",fontSize:"12px",lineHeight:"14px",mb:"8px"},children:"Phone"}),(0,j.jsx)(u.ZP,{onChange:function(e){return function(e,r){var i=e.target.value;(i=i.replace(/\D/g,"")).length>3&&i.length<=6?i=i.slice(0,3)+" "+i.slice(3):i.length>6&&(i=i.slice(0,2)+"("+i.slice(2,5)+")"+i.slice(5)),z(!0),r("phone",i)}(e,U.setFieldValue)},onBlur:U.handleBlur,value:U.values.phone,type:"phone",name:"phone",placeholder:"ex. 01 (234) 567 89 01",sx:{width:"100%",fontSize:"14px",fontWeight:600,color:"light"===r?"#fff":"#111",border:"".concat("light"===r?"is-invalid"===_("username")&&S||"#FFFFFF26":"is-invalid"===_("username")&&S||Z," solid 1px"),borderRadius:"8px",padding:"8px 18px","&:hover":{border:"1px solid #000 "}}}),U.errors.phone&&U.touched.phone&&k(U.errors.phone)]}),(0,j.jsxs)("label",{children:[(0,j.jsx)(d.Z,{sx:{color:"light"===r?"#FAFAFA4D":"#111",fontSize:"12px",lineHeight:"14px",mb:"8px"},children:"Skype"}),(0,j.jsx)(u.ZP,{onChange:T,onBlur:U.handleBlur,value:U.values.skype,type:"text",name:"skype",placeholder:"ex. +1234567890",sx:{width:"100%",fontSize:"14px",fontWeight:600,color:"light"===r?"#fff":"#111",border:"".concat("light"===r?"is-invalid"===_("username")&&S||"#FFFFFF26":"is-invalid"===_("username")&&S||Z," solid 1px"),borderRadius:"8px",padding:"8px 18px","&:hover":{border:"1px solid #000 "}}}),U.errors.skype&&U.touched.skype&&k(U.errors.skype)]})]})]}),(0,j.jsx)(x.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,j.jsx)(c.Z,{sx:{textTransform:"none",backgroundColor:"#2B78EF",marginTop:{xs:"40px",lg:"88px"},width:"262px",padding:2,borderRadius:4,fontSize:14,fontWeight:600,fontFamily:"Inter, sans-serif"},variant:"contained",type:"submit",disabled:!Y,children:"Save changes"})})]})})},w=i(24750),C=i(71652),Y=function(e){var r=e.mode;return(0,j.jsx)(C._,{dateAdapter:w.y,children:(0,j.jsx)(D,{mode:r})})}}}]);
//# sourceMappingURL=995.70488553.chunk.js.map