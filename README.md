# Portfolio Using React.js - Week 20 Homework

## Description

Being a web developer means being part of a community. You’ll need a place not only to share your projects while you're applying for jobs or working as a freelancer but also to share your work with other developers and collaborate on projects.

Your task is to create a portfolio using your new React skills, which will help set you apart from other developers whose portfolios don’t use the latest technologies.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Components](#components)
- [Styling](#styling)
- [License](#license)
- [Link](#link)

## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Components

I used `create-react-app` to build this portfolio with at the following components:

- A single `Header` component that appears on multiple pages

- A single `NavTabs` component within the header that will be used to conditionally render the different sections of your portfolio

- A single `Project` component that will be used multiple times in the Portfolio section using a `projects` file as props

- A single `Footer` component that appears on multiple pages

I also added in the following components:

- A single `Resume` component that used a `proficiencies` file as props

- A single `Form` component for a contact me section

- A single `AboutMe` component that also became the default when loading the portfolio

- A single `PortfolioContainer` to integret all of the pages and feed them to the `NavTabs` component for conditional rendering

## Styling

All of the CSS styling was done within the individual component Javascript files aside from the `Form` component as it was sitting in it's own folder. I also did some full application styling within the `App.js` file to hold the footer at the bottom of the page. Finally I defined my application color scheme in the general `index.css` file as `:root` variables.

- The color scheme was determined by loading the `Home` page panorama into `coolors.co` and picking out a dark green as the base. I also loaded the profile photo from the `About Me` page into the `coolors.co` and conveniently found that the color palette presented was very similar to the one determined by the panorma.

I plan to add some animations and further styling as I work on developing the portfolio in the coming weeks.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is protected under the MIT License.

## Link

See following for a link to my deployed application: https://nbulger1.github.io/react-bulgern-portfolio/

![GIF demonstrating functionality of the react portfolio - including responsive design](./src/images/react-demo.gif)
