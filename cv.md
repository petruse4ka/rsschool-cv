![Personal Photo of Konstantin Petrov](https://github.com/petruse4ka/rsschool-cv/blob/gh-pages/kp.jpg)
# Konstantin Petrov
*Lead Project Manager*

Master's graduate in strategic management with extensive experience in project management and business development. Throughout my career, I have honed my abilities in project management, overseeing diverse teams and delivering multiple projects to successful outcomes. My strategic planning expertise and leadership approach have enabled me to navigate complex challenges with foresight and precision. I am passionate about driving results and thrive in fast-paced environments where strategic thinking and effective teamwork are paramount. Currently, I am expanding my skill set by learning Front-End development to broaden my expertise and explore potential opportunities in the IT sector.

## Contact details
* LinkedIn: [https://www.linkedin.com/in/petrovkonstantin/](https://www.linkedin.com/in/petrovkonstantin/)
* E-Mail: karlson8.9@hotmail.com
* Telegram: [petruse4ka](https://t.me/petruse4ka)
* Discord: petrusja#6082
* Github: [petruse4ka](https://github.com/petruse4ka)

## Skills
* HTML (advanced)
* CSS (advanced)
* JS (basic)
* React (basic)
* Git (basic)

## Code Example
```
/** Алгоритмы переключения стилей страницы */

let themeButtonDark = document.querySelector('.theme-button-dark');
let themeButtonLight = document.querySelector('.theme-button-light');
let fontButtonSansSerif = document.querySelector('.font-button-sans-serif');
let fontButtonSerif = document.querySelector('.font-button-serif');

themeButtonDark.onclick = function () {
    document.body.classList.add('dark');
    themeButtonDark.classList.add('active');
    themeButtonLight.classList.remove('active');
};

themeButtonLight.onclick = function () {
    document.body.classList.remove('dark');
    themeButtonDark.classList.remove('active');
    themeButtonLight.classList.add('active');
};

fontButtonSansSerif.onclick = function () {
    document.body.classList.remove('serif');
    fontButtonSansSerif.classList.add('active');
    fontButtonSerif.classList.remove('active');
};

fontButtonSerif.onclick = function () {
    document.body.classList.add('serif');
    fontButtonSansSerif.classList.remove('active');
    fontButtonSerif.classList.add('active');
};

/** Алгоритмы переключения изображений в галлерее */

let activePhoto = document.querySelector('.active-photo');
let selectedPhotos = document.querySelectorAll('.preview-list a');

for (let selectedPhoto of selectedPhotos) {
selectedPhoto.onclick = function (evt) {
    evt.preventDefault ();
    let activePreview = document.querySelector('a.active-item');
    activePhoto.src = selectedPhoto.href;
    selectedPhoto.classList.add('active-item');
    activePreview.classList.remove('active-item');
};
};
```
# Finished Projects
* [Craft Beer website](https://github.com/petruse4ka/petruse4ka.github.io)
* [Personal CV](https://github.com/petruse4ka/rsschool-cv)

## Education
* Tilburg University
    * Masters in Strategic Management
    * Graduation year: 2011
* Tilburg University
    * Bachelor in International Management
    * Graduation year: 2010
* Moscow Gymnasium 45
    * International Baccalaureate programme
    * Graduation year: 2007

## Work Experience
* Lead Project Manager
    * Company: Trust Media
    * Location: the Netherlands
    * Duration: 2016-Present
* Head of Business Development
    * Company: Completor
    * Location: the Netherlands
    * Duration: 2012-2016
* Co-founder & Director
    * Company: Atoko
    * Location: the Netherlands
    * Duration: 2011-2012

## Languages
* English - Fluent
* Russian - Fluent
* Dutch - Intermediary

## Licences & Certifications
* AWS Cloud Quest: Cloud Practitioner (May 2024)
* AWS Well-Architected Proficient (May 2024)
* Cantrill Tech Fundamentals (April 2024)
* HTML Academy Beginners Corse (June 2023)