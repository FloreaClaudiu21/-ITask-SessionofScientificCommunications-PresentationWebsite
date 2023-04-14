import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HowItWorks = () => {
	return (
		<HelmetProvider>
			<Container className="About-header">
				<Helmet>
					<meta charSet="utf-8" />
					<title>ITask | Cum functioneaza</title>
				</Helmet>
				<Row className="mb-5 mt-3 pt-md-3">
					<Col lg="8">
						<h1 className="display-4 mb-4">Pași de utilizare a aplicației</h1>
						<hr className="t_border my-4 ml-0 text-left" />
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="5">
						<div className="sec_sp_holder">
							<img
								className="sec_sp_img"
								src={
									"https://i.ibb.co/khDQLh7/1f37da9febfdb3f4005f8765074b298a.png"
								}
								alt=""
							/>
						</div>
					</Col>
					<Col
						lg="7"
						className="d-flex align-items-center"
					>
						<div>
							<p className="d-flex-title">1. Introducere adresa de email:</p>
							<p className="d-flex-desc">
								La pornirea aplicației, utilizatorul va trebui să specifice
								adresa de email pe care dorește să primească notificările legate
								de sarcinile pe care le are de îndeplinit. Aceste notificări vor
								fi trimise utilizatorului în momentul în care o sarcină este
								aproape de termenul limită sau când o sarcină este programată să
								înceapă în curând. De asemenea, utilizatorul va putea accesa
								lista sarcinilor sale și starea acestora în orice moment
								folosind aplicația, chiar și fără a primi notificări specifice.{" "}
							</p>
						</div>
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="6">
						<p className="d-flex-title">
							2. Navigare printre luni folosind butoanele disponibile în
							aplicație:
						</p>
						<p className="d-flex-desc">
							Utilizatorul va putea naviga printre luni folosind butoanele
							disponibile în aplicație. Aceste butoane sunt amplasate într-o
							zonă accesibilă și ușor de identificat pentru utilizator, cum ar
							fi în partea de sus a ecranului. Butoanele sunt etichetate
							corespunzător "Next" & "Prev", și permite utilizatorului să
							schimbe rapid luna în care dorește să vizualizeze sarcinile sale.
							Este important ca opțiunile de navigare să fie intuitive și ușor
							de folosit, pentru a îmbunătăți experiența utilizatorului.
						</p>
					</Col>
					<Col lg="6">
						<div className="sec_sp_holder">
							<img
								className="sec_sp_img"
								src={
									"https://i.ibb.co/XjnbZ6c/0ccb496fb5af2d1e5575eca0b3a232e6.png"
								}
								alt=""
							/>
						</div>
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="6">
						<div className="sec_sp_holder">
							<img
								className="sec_sp_img"
								src={
									"https://i.ibb.co/hLdD2Vb/77e67b0b739bbcb881afbac0110469d5.png"
								}
								alt=""
							/>
						</div>
					</Col>
					<Col
						lg="6"
						className="d-flex align-items-center"
					>
						<div>
							<p className="d-flex-title">
								3. Folosirea calendarului interactiv, care afișează zilele lunii
								respective. Utilizatorul va putea selecta ziua dorită din acesta
								pentru a creea un task:
							</p>
							<p className="d-flex-desc">
								Pentru a crea un task intr-o zi specifica din luna selectata,
								tu, ca utilizator, poti folosi un calendar interactiv disponibil
								in aplicatie. Acest calendar va afisa toate zilele disponibile
								ale lunii respective, insa numai zilele viitoare pot fi
								selectate pentru a crea un task. Daca o zi din calendar este
								afisata cu o nuanta inchisa de gri, inseamna ca acea zi apartine
								trecutului si nu poate fi selectata pentru a crea un nou task.
								Dupa ce ai identificat ziua dorita, poti selecta aceasta
								printr-un simplu clic sau prin gesturi tactile, cum ar fi
								glisarea degetului pe ecranul dispozitivului mobil. Odata
								selectata ziua, vei fi directionat catre pagina de creare a
								taskului.In concluzie, prin intermediul calendarului interactiv
								disponibil in aplicatie, vei putea selecta cu usurinta ziua
								dorita pentru a crea un task. Astfel, vei putea organiza mai
								bine activitatile din viitor si iti vei putea gestiona timpul
								mai eficient.{" "}
							</p>
						</div>
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="5">
						<p className="d-flex-title">4. Crearea unui nou task:</p>
						<p className="d-flex-desc">
							Pentru a crea un task, trebuie să accesezi pagina de creare a
							taskului și să completezi toate detaliile necesare pentru a
							organiza mai bine activitățile. În mod obișnuit, acest proces
							implică apăsarea butonului "Create task". Informațiile necesare
							pentru crearea unui task includ titlul acestuia, descrierea
							detaliată a activității, termenul limită pentru finalizare și
							nivelul de importanță al taskului (scăzut, mediu sau ridicat).
							Este esențial ca aplicația să ofere o interfață clară și
							intuitivă, astfel încât să poți introduce informațiile într-un mod
							rapid și eficient. De asemenea, ar trebui să poți vizualiza toate
							taskurile într-un mod organizat, pentru a-ți putea gestiona mai
							bine timpul și prioritățile.
						</p>
					</Col>
					<Col lg="7">
						<div className="sec_sp_holder">
							<img
								className="sec_sp_img"
								src={
									"https://i.ibb.co/XWR75xz/7081f991d18c50a99474a58403651358.png"
								}
								alt=""
							/>
						</div>
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="6">
						<div className="sec_sp_holder">
							<img
								className="sec_sp_img"
								src={
									"https://i.ibb.co/WPLmWYY/8fa9d2673cafee765679e506ee700e60-1.png"
								}
								alt=""
							/>
						</div>
					</Col>
					<Col
						lg="6"
						className="d-flex align-items-center"
					>
						<div>
							<p className="d-flex-title">
								5. Vizualizare și ștergere task din listâ:
							</p>
							<p className="d-flex-desc">
								Vizualizarea listei cu sarcini se face în panoul corespunzător
								zilei selectate, iar pentru a șterge o sarcină, se poate utiliza
								butonul de ștergere alocat fiecărei sarcini.În plus față de
								informațiile deja furnizate, este important să menționăm că
								task-urile cu fundal roșu au importanță mare (high), cele cu
								fundal galben au importanță medie (medium), iar cele cu fundal
								verde au importanță mică (low). Astfel, utilizatorul poate
								identifica rapid sarcinile cu importanță ridicată, medie sau
								mică, ceea ce poate contribui la o mai bună gestionare a
								timpului și a priorităților.{" "}
							</p>
						</div>
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="5">
						<p className="d-flex-title">
							6. Primire notificare cand un task este pe cale sa inceapă sau a
							început deja:
						</p>
						<p className="d-flex-desc">
							Utilizatorul va primi o notificare cu un minut înainte ca task-ul
							să înceapă la ora și minutul setate. Această notificare îi va
							permite să se pregătească pentru începerea sarcinii și să fie
							sigur că este pregătit să înceapă la timp. De asemenea,
							utilizatorul va primi o notificare și atunci când sarcina a
							început. Aceasta va asigura că utilizatorul nu ratează începerea
							sarcinii și își poate începe activitatea imediat.De asemenea,
							utilizatorul va primi notificări și prin email la adresa
							specificată la începerea programului. Acest lucru va asigura că
							utilizatorul primește informațiile importante chiar și atunci când
							nu este în fața computerului sau nu are acces la aplicație. Prin
							această funcționalitate, utilizatorul poate rămâne la curent cu
							sarcinile lor și să-și organizeze timpul în consecință.
						</p>
					</Col>
					<Col lg="7">
						<div className="sec_sp_holder">
							<img
								className="sec_sp_img"
								src={
									"https://i.ibb.co/PmPzCk5/6bf10b331b0a99dac6e1891cfde65f92.png"
								}
								alt=""
							/>
							<img
								className="sec_sp_img"
								src={
									"https://i.ibb.co/McDcysZ/d8837ecd93975971ed2713493d28d9fe.png"
								}
								alt=""
							/>
						</div>
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="8">
						<p className="d-flex-title">
							7. Revenirea la meniul principal oricând avand posibilitatea de a
							alege o altă zi:
						</p>
						<p className="d-flex-desc">
							Utilizatorul se poate întoarce la panoul principal folosind
							butonul "back" din panoul specific fiecărei zile. Pe butonul
							fiecărei zile va fi indicat numărul de task-uri planificate pentru
							acea zi, ceea ce îi va permite utilizatorului să vadă rapid câte
							sarcini sunt planificate pentru fiecare zi și să-și gestioneze
							prioritățile în consecință. Ultimul task din zi va determina
							culoarea finală a background-ului indicatorului. Utilizatorul are
							posibilitatea de a alege o altă zi sau de a închide aplicația dacă
							nu dorește să mai utilizeze programul.
						</p>
					</Col>
					<Col lg="4">
						<div className="sec_sp_holder">
							<img
								className="sec_sp_img"
								src={
									"https://i.ibb.co/qRyp8WS/d543cb9820fe6a9e456df0dd0493086c.png"
								}
								alt=""
							/>
							<img
								className="sec_sp_img"
								src={
									"https://i.ibb.co/KbT4p8T/52afdc99ed3740d44c30da2c9dc7a568.png"
								}
								alt=""
							/>
						</div>
					</Col>
				</Row>
				<Row className="mb-5 mt-3 pt-md-3">
					<Col lg="8">
						<h1 className="display-4 mb-4">Modul de gestionare a datelor</h1>
						<hr className="t_border my-4 ml-0 text-left" />
					</Col>
				</Row>
				<Row
					className="sec_sp"
					style={{ flexDirection: "column", gap: "2rem" }}
				>
					<Col lg="12">
						<div className="sec_sp_holder">
							<img
								className="sec_sp_img"
								src={
									"https://i.ibb.co/g4Wj6Fd/560a730f9f3593e3edd4fda0685ae953.png"
								}
								alt=""
							/>
						</div>
					</Col>
					<Col
						lg="12"
						className="d-flex align-items-center"
					>
						<div>
							<p className="d-flex-title">
								1. Salvarea task-urilor create in aplicație:
							</p>
							<p className="d-flex-desc">
								Codul din imaginea din stanga reprezintă o clasă numită
								"Database" care are o dependență injectată de o interfață numită
								"ITask". Clasa conține o listă de obiecte "MonthTasks" și o
								metodă "save" care are rolul de a serializa această listă de
								obiecte în format JSON și de a o scrie într-un fișier numit
								"database.json". Metoda "save" conține un bloc try-catch care
								încercă să serializeze lista de obiecte "MonthTasks" în format
								JSON, folosind clasa "JsonSerializer" din namespace-ul
								"System.Text.Json". În cazul în care apare o excepție în timpul
								procesului de serializare sau scriere în fișier, aceasta este
								prinsă în blocul catch și se afișează un mesaj de eroare cu
								detaliile excepției. Modul de salvare este prin scrierea datelor
								serializate într-un fișier în format JSON, cu ajutorul metodei
								"File.WriteAllText". Această metodă primește ca argumente calea
								fișierului și conținutul fișierului, care în acest caz este
								reprezentat de lista serializată în format JSON. Este important
								de menționat că fișierul "database.json" trebuie să existe în
								sistemul de fișiere înainte de apelarea metodei "save", altfel
								va fi aruncată o excepție. De asemenea, această metodă nu
								returnează niciun rezultat, ci doar salvează datele în fișierul
								specificat.{" "}
							</p>
						</div>
					</Col>
				</Row>
				<Row
					className="sec_sp"
					style={{ flexDirection: "column", gap: "2rem" }}
				>
					<Col lg="12">
						<p className="d-flex-title">
							2. Încărcarea datelor salvate în fișier într-o listă și utilizarea
							acestora în aplicație:
						</p>
						<p className="d-flex-desc">
							Codul din imaginea de jos face parte din clasa anterioară și
							definește metoda "load()", care se ocupă de încărcarea datelor
							dintr-un fișier JSON ("database.json"). În funcție de conținutul
							fișierului JSON, metoda încarcă lista de sarcini (tasks) sau
							creează o nouă listă de sarcini, pentru fiecare lună a anului, cu
							ajutorul metodei "GetMonthDays" din clasa "App". În cazul în care
							fișierul JSON există și are cel puțin o sarcină salvată, metoda
							"load()" va itera prin toate sarcinile și va elimina orice sarcină
							care a expirat, adică a trecut de ziua și ora setată. Dacă
							fișierul JSON este gol, metoda va crea o listă de sarcini pentru
							fiecare lună a anului, utilizând metoda "GetMonthDays" din clasa
							"App" pentru a obține numărul de zile pentru fiecare lună.În
							esență, metoda "load()" încarcă și prelucrează datele din fișierul
							"database.json", astfel încât să le poată folosi ulterior pentru
							afișarea și gestionarea sarcinilor din calendar. În primul rând,
							se încearcă citirea conținutului fișierului JSON utilizând metoda
							"File.ReadAllText()" din librăria standard .NET. Dacă citirea
							reușește, se deserializază conținutul JSON într-o listă de obiecte
							"MonthTasks" utilizând metoda "JsonSerializer.Deserialize()". În
							timpul deserializării, se specifică o politică de denumire a
							proprietăților JSON utilizând "JsonNamingPolicy.CamelCase" și se
							setează opțiunea "WriteIndented" pentru a formata ieșirea JSON
							într-un mod ușor de citit. Dacă lista de sarcini este validă și
							conține cel puțin o sarcină pentru prima zi a primei luni, se
							iterează prin toate sarcinile și se verifică dacă acestea au
							expirat. Dacă da, sarcina respectivă este eliminată din lista de
							sarcini. În cazul în care fișierul JSON este gol sau lista de
							sarcini nu conține nicio sarcină pentru prima zi a primei luni, se
							va crea o nouă listă de sarcini pentru fiecare lună a anului.
							Acest lucru se realizează prin iterația prin fiecare lună și
							crearea unei liste de obiecte "DayTask" pentru fiecare zi a lunii
							respective. Aceste obiecte "DayTask" conțin informații despre
							sarcinile programate pentru acea zi. În final, în cazul în care
							apare o eroare la încărcarea datelor, se va afișa un mesaj de
							eroare prin intermediul unei ferestre pop-up și aplicația va fi
							închisă.
						</p>
					</Col>
					<Col lg="12">
						<div className="sec_sp_holder">
							<img
								className="sec_sp_img"
								src={
									"https://i.ibb.co/1KXX2bT/fa36779babba1808e8b4bf6fb28f8e49.png"
								}
								alt=""
							/>
							<img
								className="sec_sp_img"
								src={
									"https://i.ibb.co/Dg76nqk/186f7e4d143c736a9e5bf790d1822e1a.png"
								}
								alt=""
							/>
						</div>
					</Col>
				</Row>
				<Row className="mb-5 pt-md-1 pb-md-1 center">
					<Link
						to="/conclusion"
						style={{ display: "flex", justifyContent: "center" }}
					>
						<div
							id="button_h"
							className="ac_btn btn"
						>
							Care este concluzia?
							<div className="ring one"></div>
							<div className="ring two"></div>
							<div className="ring three"></div>
						</div>
					</Link>
				</Row>
				<Row className="mt-2"></Row>
			</Container>
		</HelmetProvider>
	);
};

