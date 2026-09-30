const IMG={pic:"Img/Pic.png",p:[["Img/projects/0_KCCITADOS/1.png","Img/projects/0_KCCITADOS/2.png","Img/projects/0_KCCITADOS/3.jpeg"],["Img/projects/1_POKEDEX/1.png","Img/projects/1_POKEDEX/2.png","Img/projects/1_POKEDEX/3.png"],["Img/projects/2_TODOLIST/1.png","Img/projects/2_TODOLIST/2.png","Img/projects/2_TODOLIST/3.png"],["Img/projects/3_ECOMMERCE_DB/1.png","Img/projects/3_ECOMMERCE_DB/2.png","Img/projects/3_ECOMMERCE_DB/3.png"],["Img/projects/4_PCAM/3.png","Img/projects/4_PCAM/2.png","Img/projects/4_PCAM/4.png"],["Img/projects/5_BUSTOYOU/1.png","Img/projects/5_BUSTOYOU/2.png"]]};
const T={en:{logo:"Portfolio",nav_home:"Home",nav_about:"About",nav_skills:"Skills",nav_projects:"Projects",nav_contact:"Contact",greeting:"Hi, I'm <span>Geanluis Lorenzo</span>",description:"I am a passionate and proactive developer, always ready to tackle new challenges with a positive attitude. I am driven by the desire to overcome obstacles and continuously grow, seeking innovative solutions and learning opportunities in every experience.",cv:"View / Download CV",exp_title:"Experience",edu_title:"Education",cert_title:"Certifications",projects_title:"My Projects",prev:"Previous",next:"Next",view:"View",iss:"Issuer:",dat:"Date:",proc:"On Process",f:["All","LinkedIn","Neoris","Capacítate","Other"]},
es:{logo:"Portafolio",nav_home:"Inicio",nav_about:"Acerca de",nav_skills:"Habilidades",nav_projects:"Proyectos",nav_contact:"Contacto",greeting:"Hola, soy <span>Geanluis Lorenzo</span>",description:"Soy un desarrollador apasionado y proactivo, siempre listo para enfrentar nuevos desafíos con una actitud positiva. Me impulsa el deseo de superar obstáculos y crecer continuamente, buscando soluciones innovadoras y oportunidades de aprendizaje en cada experiencia.",cv:"Ver / Descargar CV",exp_title:"Experiencia",edu_title:"Educación",cert_title:"Certificaciones",projects_title:"Mis Proyectos",prev:"Anterior",next:"Siguiente",view:"Ver",iss:"Emisor:",dat:"Fecha:",proc:"En proceso",f:["Todos","LinkedIn","Neoris","Capacítate","Otros"]}};
const EXP=[
{t:["Project Leader - Software Developer","Líder de Proyecto - Desarrollador de Software"],s:["CGL - Banco Popular dominicano | 2026","CGL - Banco Popular dominicano | 2026"],d:[["Being experienced right now.","Actualmente en desarrollo."]]},
{t:["Agent Discovery","Agent Discovery"],s:["Media Monitors | 2025-2026","Media Monitors | 2025-2026"],d:[["Evaluated ad campaign performance through data analysis. Used tools like Google Analytics, Google researches and library documentation. Delivered actionable reports to improve targeting. Collaborated with marketing teams to refine messaging and audiences. Skilled in Excel, Data Studio, and strategic thinking.","Evaluación del rendimiento de campañas publicitarias mediante análisis de datos. Uso de herramientas como Google Analytics, investigaciones de Google y documentación de bibliotecas. Entrega de informes prácticos para mejorar la segmentación. Colaboración con equipos de marketing para refinar mensajes y audiencias. Habilidades en Excel, Data Studio y pensamiento estratégico."]]},
{t:["Freelance Developer","Desarrollador Freelance"],s:["2022-Present","2022-Presente"],d:[["Engages in various projects, gaining experience in multiple technologies and development approaches. Demonstrates adaptability to diverse requirements and technologies, delivering efficient and functional solutions tailored to different user needs.","Participa en diversos proyectos, adquiriendo experiencia en múltiples tecnologías y enfoques de desarrollo. Demuestra adaptabilidad a distintos requisitos y tecnologías, entregando soluciones eficientes y funcionales adaptadas a las necesidades del usuario."],["Develops scalable and well-structured applications using architectures such as MVC and Onion in .NET, focusing on separation of concerns and best development practices.","Desarrolla aplicaciones escalables y bien estructuradas usando arquitecturas como MVC y Onion en .NET, enfocándose en la separación de preocupaciones y buenas prácticas de desarrollo."],["<i>(You can see it in more detail in the projects section.)</i>","<i>(Puedes verlo con más detalle en la sección de proyectos.)</i>"]]},
{t:["Home Helper, Staff Trainer","Ayudante del Hogar, Capacitador de Personal"],s:["Sociedad Dominicana de los Testigos de Jehová | 2023-2025","Sociedad Dominicana de los Testigos de Jehová | 2023-2025"],d:[["Facility Supervision: Supervises facility conditions to maintain cleanliness, organization, and proper maintenance in common and residential areas, prioritizing residents' well-being. Enforces safety measures to protect employees, customers, and company assets. Includes training new employees, providing guidance on procedures, policies, and safety standards while supporting the team in daily tasks.","Supervisión de instalaciones: supervisa las condiciones de las instalaciones para mantener limpieza, organización y mantenimiento adecuado en áreas comunes y residenciales, priorizando el bienestar de los residentes. Aplica medidas de seguridad para proteger empleados, clientes y activos de la empresa. Incluye la formación de nuevos empleados, proporcionando orientación sobre procedimientos, políticas y estándares de seguridad, apoyando al equipo en tareas diarias."]]},
{t:["Technical Support","Soporte Técnico"],s:["Ferreteria Mirasol | 2017-2023","Ferretería Mirasol | 2017-2023"],d:[["Technical Troubleshooting and Data Management, handles software and hardware issues to ensure seamless and efficient operations, diagnoses system failures, identifies root causes, and implements effective solutions to maintain system integrity and functionality.","Resolución de problemas técnicos y gestión de datos, maneja problemas de software y hardware para garantizar operaciones fluidas y eficientes. Diagnostica fallos del sistema, identifica causas raíz e implementa soluciones efectivas para mantener la integridad y funcionalidad del sistema."],["Record purchases and sales, manually or through automated systems, ensuring data accuracy and timely updates. This is critical to prevent inventory or financial discrepancies and support effective decision-making.","Registro de compras y ventas, manualmente o mediante sistemas automatizados, asegurando la precisión de los datos y actualizaciones oportunas. Esto es crítico para prevenir discrepancias de inventario o financieras y apoyar la toma de decisiones efectiva."]]}];
const EDU=[
{t:["Software Developer","Desarrollador de Software"],s:["Instituto Tecnológico de las Américas (ITLA)","Instituto Tecnológico de las Américas (ITLA)"],d:[["2021-Present","2021-Presente"]]},
{t:["Mathematics & Technology","Matemáticas y Tecnología"],s:["Centro Educativo en Artes Club Mauricio Baez","Centro Educativo en Artes Club Mauricio Baez"],d:[["2019-2020","2019-2020"]]},
{t:["Arts: Cinematography and Photography","Artes: Cinematografía y Fotografía"],s:["Centro Educativo en Artes Club Mauricio Baez","Centro Educativo en Artes Club Mauricio Baez"],d:[["2016-2019","2016-2019"]]}];
const I={l:["LinkedIn","linkedin"],n:["Neoris Global Campus","neoris"],c:["Capacítate el Empleo","capacitate"],u:["Udemy","other"],x:["Cisco Networking Academy","other"]};
const N="epamNeoris/";
const C=[
["l","2026",N+"DevOps_Profetional.png","DevOps Professional Certificate by PagerDuty | LinkedIn","Certificado Profesional de DevOps: PagerDuty | LinkedIn"],
["l","2026",N+"DevOps_CDCI.png","DevOps Foundations: Continuous Delivery/Continuous Integration","Fundamentos de DevOps: CI/CD"],
["l","2026",N+"DevOps_IaC.png","DevOps Foundations: Infrastructure as Code","Fundamentos de DevOps: Infrastructure as Code"],
["l","2026",N+"DevOpsFoundation.png","DevOps Foundations","Fundamentos de DevOps"],
["l","2026",N+"MicroFound.png","Microservices Foundations","Fundamentos de los Microservicios"],
["l","2026",N+"ApiIntro.png","Introduction to Web APIs","Introducción a APIs Web"],
["l","2026",N+"RiskM.png","Strategic Project Risk Management","Gestión estratégica de riesgos de proyectos"],
["l","2026",N+"raci.png","Improve Collaboration and Role Clarity with RACI and Swimlanes","Mejore la colaboración y la claridad de roles con RACI y carriles de actividad (swimlanes)."],
["l","2026",N+"BuildWithAI.png","Build With AI: Reasoning Models for AI Agents","Construye con IA: Agentes de IA 'Reasoning Models'"],
["l","2026",N+"PMTech.png","Project Management: Technical Projects","Gestión de Proyectos: Proyectos Técnicos"],
["l","2026",N+"SQLFinance.png","SQL For Professional Finance","SQL Para Finanzas Profesionales"],
["l","2026",N+"Project_Manag.png","Project Management Skills for Leaders","Habilidades de Gestión de Proyectos para Líderes"],
["l","2026",N+"AgileLeader.png","Agile Leader: Mastering the Mindset, Skills, and Strategies to Succeed","Líder Ágil: Dominando la Mentalidad, Habilidades y Estrategias para Tener Éxito"],
["n","2026",N+"SGSPI.png","Information Security and Privacy Management System (SGSPI) V1.0","Sistema de Gestión de Seguridad de la Información y Privacidad (SGSPI) V1.0"],
["n","2026",N+"SeguridadInformacion.png","General Awareness in Information Security v5.0","Concientización General en Seguridad de la Información v5.0"],
["n","2026",N+"SecureCoding.png","Secure Coding Practices","Prácticas de Codificación Segura"],
["n","2026",N+"ProcesoDesarrolloSeguro.png","Secure Development Process","Proceso de Desarrollo Seguro"],
["n","2026",N+"Privacidad_Datos_PErsonales.png","Personal Data Privacy","Privacidad de Datos Personales"],
["n","2026",N+"PCI_PaymentCard.png","Payment Card Industry Data Security Standard (PCI DSS)","Estándar de Seguridad de Datos de la Industria de Tarjetas de Pago (PCI DSS)"],
["n","2026",N+"OWASP.png","OWASP Top 10","OWASP Top 10"],
["n","2026",N+"MetodologiaDesarrollo.png","Software Project Development Methodology","Metodología de Desarrollo de Proyecto de Software"],
["n","2026",N+"GDPR_Proteccion_datos.png","General Data Protection Regulation (GDPR)","Reglamento General de Protección de Datos (GDPR)"],
["n","2026",N+"AnalisisDinamico.png","Dynamic Analysis","Análisis Dinámico"],
["u","2026","","SQL Bootcamp (30 Hours): Go from Zero to Hero","SQL Bootcamp (30 Horas): De Cero a Héroe"],
["c","2025","finder.jpeg","Finder","Finder"],
["c","2025","computer_repair.png","Computer Equipment Installation and Repair Technician","Técnico en Instalación y Reparación de Equipos de Cómputo"],
["c","2025","office_automation.png","Computer Technician (Office Automation)","Técnico en Computación (Ofimática)"],
["x","2021","IT_Essentials.png","IT Essentials: PC Hardware and Software","IT Essentials: Hardware y Software de PC"],
["c","2020","control_version.png","Control Version","Control de Versiones"]];
const SK=[
[["DevOps & Automation","DevOps y Automatización"],[["♾️","CI/CD","CI/CD"],["📦","Docker & Containers","Docker y Contenedores"],["⚙️","Infrastructure as Code (IaC)","Infraestructura como Código (IaC)"],["🚀","Deployment & Delivery","Despliegue y Entrega"],["📊","Monitoring & Logging","Monitoreo y Registro"]]],
[["Software Architecture","Arquitectura de Software"],[["🏗️","Microservices","Microservicios"],["🔗","REST APIs","APIs REST"],["🧅","Onion Architecture","Arquitectura Onion"],["📐","MVC","MVC"]]],
[["Security & Privacy","Seguridad y Privacidad"],[["🛡️","OWASP Top 10","OWASP Top 10"],["🔐","Secure Coding","Codificación Segura"],["🇪🇺","GDPR","GDPR"],["💳","PCI DSS","PCI DSS"]]],
[["Project Management & Agile","Gestión de Proyectos y Ágil"],[["🏃","Agile Methodologies","Metodologías Ágiles"],["🗺️","Project Leadership","Liderazgo de Proyectos"],["📉","Risk Management","Gestión de Riesgos"],["🤝","RACI & Collaboration","RACI y Colaboración"]]],
[["Core Software Development","Desarrollo de Software Principal"],[["☕","Java","Java"],["🐘","PHP","PHP"],["⚡","JavaScript","JavaScript"],["🗄️","SQL Server","SQL Server"],["#️⃣","C#","C#"]]],
[["Knowledge & Tools","Conocimientos y Herramientas"],[["🏠","Remote Work","Trabajo Remoto"],["🧩","Microsoft 365","Microsoft 365"],["💻","Frontend","Frontend"],["🖥️","Backend","Backend"]]],
[["Soft Skills","Habilidades Blandas"],[["🔀","Multitasking","Multitarea"],["💬","Communication","Comunicación"],["🗂️","Organization","Organización"],["🧠","Analysis & Learning","Análisis y Aprendizaje"]]]];
const PJ=[
[["KC Citados","KC Citados"],["KC Citados is currently under active development, built with modern technologies and a user-friendly interface. You can preview the landing page at ","KC Citados está actualmente en desarrollo activo, construido con tecnologías modernas y una interfaz amigable. Puedes ver la página oficial en "],["React","Express JS","Firebase"],1],
[["Pokedex","Pokedex"],["In the project we made the pokedex with the main goal of learning how to work with MVC and a CRUD.","En este proyecto hicimos la pokedex con el objetivo principal de aprender a trabajar con MVC y un CRUD."],["C#",".Net","MVC"]],
[["To Do List","Lista de Tareas"],["This project is a to do list, where you can create, read, update and delete tasks and mark them as done.","Este proyecto es una lista de tareas, donde puedes crear, leer, actualizar y eliminar tareas, y marcarlas como completadas."],["JavaScript","React JS"]],
[["Ecommerce Database","Base de Datos de Ecommerce"],["The following table structure is an example of a database design that covers the core functionality of an e-commerce platform. In other words is the database diagram to facilitate the core functions.","La siguiente estructura de tabla es un ejemplo de diseño de base de datos que cubre la funcionalidad principal de una plataforma de comercio electrónico. Es decir, es el diagrama de base de datos para facilitar las funciones principales."],["SQL","Microsoft Management Studio"]],
[["P.C.A.P","P.C.A.P"],["This program is intended to help Jehovah's Witnesses to facilitate the creation, editing, searching and deleting of publishers, preaching locations, preaching schedules, and of course, the assignment of shifts, all based on CRUDS, Views and JOINS.","Este programa está diseñado para ayudar a los Testigos de Jehová a facilitar la creación, edición, búsqueda y eliminación de publicadores, ubicaciones de predicación, horarios de predicación y, por supuesto, la asignación de turnos, todo basado en CRUDS, Vistas y JOINS."],["C#","SQL","MVC"]],
[["Bus to You","Bus to You"],["This project was made in C#, with an architecture in 4 Layers, Windows form and loading the data from SQL, using views, joins, functions and CRUDS.","Este proyecto fue hecho en C#, con una arquitectura de 4 capas, Windows Form y cargando los datos desde SQL, usando vistas, joins, funciones y CRUDS."],["C#","4 Layers","SQL"]]];

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],R=document.documentElement;
const ST=(k,v)=>{try{return v===undefined?localStorage.getItem(k):localStorage.setItem(k,v)}catch(e){return null}};
let L=(ST("lang")||(navigator.language||"en").slice(0,2))==="es"?1:0,page=0,flt="all",PER=6;
const K=()=>L?"es":"en";
const tl=(a,id)=>$(id).innerHTML=a.map(e=>`<div class="card rv"><h4>${e.t[L]}</h4><h5>${e.s[L]}</h5>${e.d.map(p=>`<p>${p[L]}</p>`).join("")}</div>`).join("");
function certs(){
 const list=C.filter(c=>flt==="all"||I[c[0]][1]===flt),tp=Math.max(1,Math.ceil(list.length/PER));page=Math.min(page,tp-1);
 $("#cg").innerHTML=list.slice(page*PER,page*PER+PER).map(c=>`<div class="card cert${c[2]?" has":""}"${c[2]?` data-img="Img/certificates/${c[2]}" tabindex="0" role="button"`:""}><span class="bd ${c[2]?"":"pr"}">${c[2]?c[1]:T[K()].proc}</span><h3>${c[3+L]}</h3><p class="is">${I[c[0]][0]}</p>${c[2]?`<span class="vw">${T[K()].view} →</span>`:""}</div>`).join("");
 $("#pv").disabled=page===0;$("#nx").disabled=page>=tp-1;
}
function fl(){const k=["all","linkedin","neoris","capacitate","other"];$("#fl").innerHTML=k.map((x,i)=>`<button data-f="${x}" class="${x===flt?"on":""}">${T[K()].f[i]}</button>`).join("");$$("#fl button").forEach(b=>b.onclick=()=>{flt=b.dataset.f;page=0;fl();certs()})}
function skills(){$("#sk").innerHTML=SK.map(g=>`<div class="card rv"><h3>${g[0][L]}</h3><hr><div class="si">${g[1].map(s=>`<span>${s[0]} ${s[1+L]}</span>`).join("")}</div></div>`).join("")}
function projs(){$("#pj").innerHTML=PJ.map((p,i)=>`<div class="card pj rv"><div class="sl" data-n="${i}">${IMG.p[i].map((s,j)=>`<img src="${s}" alt="${p[0][0]} ${j+1}" class="${j?"":"on"}">`).join("")}</div><div class="bo"><h4>${p[0][L]}</h4><p>${p[1][L]}${p[3]?`<a href="https://kccitados.com" target="_blank" rel="noopener">KC Citados</a>`:""}</p><div class="tags">${p[2].map(t=>`<span>${t}</span>`).join("")}</div></div></div>`).join("")}
function apply(){
 const t=T[K()];R.lang=K();document.title="Geanluis Lorenzo | "+(L?"Portafolio":"Portfolio");
 $$("[data-i]").forEach(e=>e.innerHTML=t[e.dataset.i]);
 $("#lg").textContent=L?"EN":"ES";$("#pv").textContent="← "+t.prev;$("#nx").textContent=t.next+" →";
 tl(EXP,"#exp");tl(EDU,"#edu");fl();certs();skills();projs();reveal();ST("lang",K());
}
let io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
function reveal(){$$(".rv:not(.in)").forEach(e=>io.observe(e))}
$("#lg").onclick=()=>{L=1-L;apply()};
$("#pv").onclick=()=>{page--;certs()};$("#nx").onclick=()=>{page++;certs()};
const dark=()=>R.dataset.theme?R.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;
const ic=()=>$("#th").textContent=dark()?"☀":"☾";
const sv=ST("theme");if(sv)R.dataset.theme=sv;ic();
$("#th").onclick=()=>{const n=dark()?"light":"dark";R.dataset.theme=n;ST("theme",n);ic()};
$("#mb").onclick=()=>$("#lk").classList.toggle("open");
$$("#lk a").forEach(a=>a.onclick=()=>$("#lk").classList.remove("open"));
$("#pic").src=IMG.pic;
setInterval(()=>$$(".sl").forEach(s=>{const im=[...s.children],i=im.findIndex(x=>x.classList.contains("on"));im[i].classList.remove("on");im[(i+1)%im.length].classList.add("on")}),3200);
const px=$$("[data-s]"),sec=$$("section[id]"),lk=$$("#lk a");let tk=false;
function upd(){const y=scrollY;
 px.forEach(e=>{const r=e.closest(".band,#home");const b=r?r.getBoundingClientRect().top+y:0;const o=r?(y-b):y;e.style.transform=`translate3d(${e.classList.contains("big")?"-50%":"0"},${(r?o:y)*e.dataset.s}px,0)`});
 let c=sec[0].id;sec.forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)c=s.id});lk.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+c));tk=false}
if(!matchMedia("(prefers-reduced-motion:reduce)").matches)addEventListener("scroll",()=>{if(!tk){tk=true;requestAnimationFrame(upd)}},{passive:true});
/* ===== Popout de certificados ===== */
const cm=$("#cm"),cmImg=$("#cmImg");let cur=0;
const cards=()=>$$("#cg .cert.has");
function showM(i){const cs=cards();if(!cs.length)return;cur=(i+cs.length)%cs.length;const c=cs[cur];
 $("#cmT").textContent=c.querySelector("h3").textContent;$("#cmI").textContent=c.querySelector(".is").textContent;$("#cmD").textContent=c.querySelector(".bd").textContent;
 cmImg.src=c.dataset.img;cmImg.alt=$("#cmT").textContent;cm.classList.add("open");document.body.style.overflow="hidden";}
function closeM(){cm.classList.remove("open");document.body.style.overflow="";cmImg.removeAttribute("src");}
$("#cg").addEventListener("click",e=>{const c=e.target.closest(".cert.has");if(c)showM(cards().indexOf(c))});
$("#cg").addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){const c=e.target.closest(".cert.has");if(c){e.preventDefault();showM(cards().indexOf(c))}}});
$("#cmX").onclick=closeM;$("#cmP").onclick=()=>showM(cur-1);$("#cmN").onclick=()=>showM(cur+1);
cm.addEventListener("click",e=>{if(e.target===cm)closeM()});
addEventListener("keydown",e=>{if(!cm.classList.contains("open"))return;if(e.key==="Escape")closeM();if(e.key==="ArrowLeft")showM(cur-1);if(e.key==="ArrowRight")showM(cur+1)});
apply();upd();