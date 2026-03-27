import{d as t}from"./hooks.module.SnI7CY3D.js";import{u as e}from"./jsxRuntime.module.BQEJCF1k.js";function I({onComplete:v}){const[n,i]=t(1),[s,d]=t({username:"",password:"",confirmPassword:"",fullname:""}),[a,l]=t({username:"",password:"",confirmPassword:"",fullname:""}),[u,h]=t(!1),[f,c]=t(null),[y,x]=t([]),w=r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r),b=r=>r.length>=6,o=r=>r.password===r.confirmPassword,k=s.username&&w(s.username)&&b(s.password)&&s.fullname&&o(s),g=a.username||a.password||a.fullname,C=!g||w(a.username)&&b(a.password)&&a.fullname&&o(a);async function P(){h(!0),c(null);const r=[{...s,role:"admin"}];g&&a.username&&a.password&&a.fullname&&r.push({...a,role:"manager"});try{const m=await fetch("/api/setup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({users:r})}),p=await m.json();if(m.ok&&p.success)x(p.created),i(4);else{const A=p.errors?.map(z=>`${z.username}: ${z.error}`).join(", ")||"Failed to create accounts";c(A)}}catch{c("Network error. Please try again.")}finally{h(!1)}}return e("div",{class:"setup-wizard",children:[e("div",{class:"wizard-header",children:[e("h2",{children:"Account Setup"}),e("p",{children:"Create admin and manager accounts"})]}),e("div",{class:"wizard-steps",children:[e("div",{class:`step ${n>=1?"active":""} ${n>1?"completed":""}`,children:[e("span",{class:"step-number",children:"1"}),e("span",{class:"step-label",children:"Admin"})]}),e("div",{class:"step-line"}),e("div",{class:`step ${n>=2?"active":""} ${n>2?"completed":""}`,children:[e("span",{class:"step-number",children:"2"}),e("span",{class:"step-label",children:"Manager"})]}),e("div",{class:"step-line"}),e("div",{class:`step ${n>=3?"active":""} ${n>3?"completed":""}`,children:[e("span",{class:"step-number",children:"3"}),e("span",{class:"step-label",children:"Confirm"})]})]}),f&&e("div",{class:"wizard-error",children:f}),n===1&&e("div",{class:"wizard-step",children:[e("h3",{children:"Admin Account"}),e("div",{class:"form-group",children:[e("label",{children:"Full Name"}),e("input",{type:"text",class:"wizard-input",value:s.fullname,onInput:r=>d({...s,fullname:r.target.value}),placeholder:"John Doe"})]}),e("div",{class:"form-group",children:[e("label",{children:"Email (Username)"}),e("input",{type:"email",class:"wizard-input",value:s.username,onInput:r=>d({...s,username:r.target.value}),placeholder:"admin@example.com"})]}),e("div",{class:"form-group",children:[e("label",{children:"Password"}),e("input",{type:"password",class:"wizard-input",value:s.password,onInput:r=>d({...s,password:r.target.value}),placeholder:"Min 6 characters"})]}),e("div",{class:"form-group",children:[e("label",{children:"Confirm Password"}),e("input",{type:"password",class:`wizard-input ${s.confirmPassword&&!o(s)?"input-error":""}`,value:s.confirmPassword,onInput:r=>d({...s,confirmPassword:r.target.value}),placeholder:"Confirm password"}),s.confirmPassword&&!o(s)&&e("span",{class:"field-error",children:"Passwords do not match"})]}),e("div",{class:"wizard-actions",children:e("button",{class:"wizard-btn wizard-btn-primary",disabled:!k,onClick:()=>i(2),children:"Next"})})]}),n===2&&e("div",{class:"wizard-step",children:[e("h3",{children:"Manager Account"}),e("div",{class:"form-group",children:[e("label",{children:"Full Name"}),e("input",{type:"text",class:"wizard-input",value:a.fullname,onInput:r=>l({...a,fullname:r.target.value}),placeholder:"Jane Smith"})]}),e("div",{class:"form-group",children:[e("label",{children:"Email (Username)"}),e("input",{type:"email",class:"wizard-input",value:a.username,onInput:r=>l({...a,username:r.target.value}),placeholder:"manager@example.com"})]}),e("div",{class:"form-group",children:[e("label",{children:"Password"}),e("input",{type:"password",class:"wizard-input",value:a.password,onInput:r=>l({...a,password:r.target.value}),placeholder:"Min 6 characters"})]}),e("div",{class:"form-group",children:[e("label",{children:"Confirm Password"}),e("input",{type:"password",class:`wizard-input ${a.confirmPassword&&!o(a)?"input-error":""}`,value:a.confirmPassword,onInput:r=>l({...a,confirmPassword:r.target.value}),placeholder:"Confirm password"}),a.confirmPassword&&!o(a)&&e("span",{class:"field-error",children:"Passwords do not match"})]}),e("div",{class:"wizard-actions",children:[e("button",{class:"wizard-btn wizard-btn-secondary",onClick:()=>i(1),children:"Back"}),e("button",{class:"wizard-btn wizard-btn-secondary",onClick:()=>{l({username:"",password:"",confirmPassword:"",fullname:""}),i(3)},children:"Skip"}),e("button",{class:"wizard-btn wizard-btn-primary",disabled:!C,onClick:()=>i(3),children:"Next"})]})]}),n===3&&e("div",{class:"wizard-step",children:[e("h3",{children:"Confirm Accounts"}),e("div",{class:"summary",children:[e("div",{class:"summary-item",children:[e("h4",{children:"Admin"}),e("p",{children:[e("strong",{children:"Name:"})," ",s.fullname]}),e("p",{children:[e("strong",{children:"Email:"})," ",s.username]})]}),a.username&&e("div",{class:"summary-item",children:[e("h4",{children:"Manager"}),e("p",{children:[e("strong",{children:"Name:"})," ",a.fullname]}),e("p",{children:[e("strong",{children:"Email:"})," ",a.username]})]})]}),e("div",{class:"wizard-actions",children:[e("button",{class:"wizard-btn wizard-btn-secondary",onClick:()=>i(2),children:"Back"}),e("button",{class:"wizard-btn wizard-btn-primary",disabled:u,onClick:P,children:u?"Creating...":"Create Accounts"})]})]}),n===4&&e("div",{class:"wizard-step wizard-success",children:[e("div",{class:"success-icon",children:e("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),e("h3",{children:"Accounts Created!"}),e("div",{class:"summary",children:y.map(r=>e("div",{class:"summary-item success",children:[e("span",{class:"role-badge",children:r.role}),e("p",{children:r.username})]},r.username))}),e("div",{class:"wizard-actions",children:e("button",{class:"wizard-btn wizard-btn-primary",onClick:v,children:"Done"})})]}),e("style",{children:`
        .setup-wizard {
          max-width: 480px;
          margin: 0 auto;
          padding: 2rem;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .wizard-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .wizard-header h2 {
          font-family: 'Courgette', cursive;
          color: #3e2723;
          margin: 0 0 0.5rem;
        }

        .wizard-header p {
          color: #666;
          margin: 0;
        }

        .wizard-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .step-number {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #e0e0e0;
          color: #666;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          transition: all 0.3s;
        }

        .step.active .step-number {
          background: #3e2723;
          color: #fff;
        }

        .step.completed .step-number {
          background: #4caf50;
          color: #fff;
        }

        .step-label {
          font-size: 0.75rem;
          color: #666;
        }

        .step.active .step-label {
          color: #3e2723;
          font-weight: 600;
        }

        .step-line {
          width: 60px;
          height: 2px;
          background: #e0e0e0;
          margin: 0 0.5rem;
          margin-bottom: 1.5rem;
        }

        .wizard-step {
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .wizard-step h3 {
          color: #3e2723;
          margin: 0 0 1.5rem;
          text-align: center;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          font-size: 0.875rem;
          color: #666;
          margin-bottom: 0.5rem;
        }

        .wizard-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }

        .wizard-input:focus {
          outline: none;
          border-color: #3e2723;
        }

        .wizard-input.input-error {
          border-color: #c62828;
        }

        .field-error {
          display: block;
          color: #c62828;
          font-size: 0.75rem;
          margin-top: 0.25rem;
        }

        .wizard-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .wizard-btn {
          flex: 1;
          padding: 0.875rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .wizard-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .wizard-btn-primary {
          background: #3e2723;
          color: #fff;
        }

        .wizard-btn-primary:hover:not(:disabled) {
          background: #5d4037;
        }

        .wizard-btn-secondary {
          background: #e0e0e0;
          color: #666;
        }

        .wizard-btn-secondary:hover:not(:disabled) {
          background: #d0d0d0;
        }

        .wizard-error {
          background: #ffebee;
          color: #c62828;
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }

        .summary {
          background: #f5f5f5;
          padding: 1rem;
          border-radius: 8px;
        }

        .summary-item {
          padding: 0.75rem 0;
          border-bottom: 1px solid #e0e0e0;
        }

        .summary-item:last-child {
          border-bottom: none;
        }

        .summary-item h4 {
          margin: 0 0 0.5rem;
          color: #3e2723;
        }

        .summary-item p {
          margin: 0.25rem 0;
          font-size: 0.875rem;
          color: #666;
        }

        .summary-item.success {
          text-align: center;
        }

        .role-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: #3e2723;
          color: #fff;
          border-radius: 12px;
          font-size: 0.75rem;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .wizard-success {
          text-align: center;
        }

        .success-icon {
          color: #4caf50;
          margin-bottom: 1rem;
        }
      `})]})}export{I as default};
