module.exports = {
  title: 'Fajar Dwi darmanto | Web Developer',
  description: 'Portfolio of Fajar Dwi darmanto',
  section: {
    hero: {
      title: `Hello 👋, I'm <span class="is-primary">Fajar</span>`,
      subtitle: `A <strong><em>Web Developer</em></strong> from Indonesia 🇮🇩`
    },
    about: {
      title: 'ABOUT ME',
      imageHref: 'https://bulma.io/images/placeholders/480x480.png',
      description: `
        <p>
          I like to code and know several programming languages like C, C ++, Python and Javascript.
        </p>
        <p>
          I know tools for creating website frontend such as HTML, CSS, and React. On the backend side, I use Express for NodeJS and Django.
        </p>
      `
    },
    projects: {
      title: 'PROJECTS',
      items: [
        {
          title: 'Movie Catalogue',
          imageHref: 'https://res.cloudinary.com/dayie1lcz/image/upload/v1597384790/movie-catalogue_ahx49p.png',
          liveLink: 'https://react-movie-catalogue.netlify.app/',
          sourceLink: '/',
          description: `
            <p>
              A website to find information about a film. You can find movies that are currently playing in theaters or that will be released. I created this website using React for the frontend framework and Redux for state management.
            </p>
          `
        },
        {
          title: 'Password Generator',
          imageHref: 'https://res.cloudinary.com/dayie1lcz/image/upload/v1597384086/password-generator_vrmeuz.png',
          liveLink: 'https://dwdarm-password-generator.netlify.app/',
          sourceLink: '/',
          description: `
            <p>
              A website to generate a password. You can choose what options the character text will be used for. I created this website using vanilla javascript.
            </p>
          `
        },
      ]
    },
    contacts: {
      title: 'CONTACTS',
      email: 'fajardwidarm@gmail.com',
      github: 'https://github.com/dwdarm',
      twitter: 'https://twitter.com/fajardwidarm',
      copyright: '@ 2020 - Developed by Fajar Dwi Darmanto',
    }
  }
}
