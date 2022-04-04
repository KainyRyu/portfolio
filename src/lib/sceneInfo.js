const sceneInfo = [
  {
    type: 'sticky',
    heightNum: 3,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('.project0'),
      oldWebtoonImg: document.querySelector('.scroll-img0'),
      newWebtoonImg: document.querySelector('.scroll-img1'),
    },
    values: {
      oldImg_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
      oldImg_opacity_out: [1, 0, { start: 0.2, end: 0.3 }],
      newImg_opacity_in: [0, 1, { start: 0.25, end: 0.35 }],
      newImg_opacity_out: [0, 1, { start: 0.9, end: 0.95 }],
      paragraphA_opacity_in: [0, 1, { start: 0.1, end: 0.9 }],
    },
  },
  {
    type: 'normal',
    heightNum: 3,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('.project1'),
    },
    values: {},
  },
  {
    type: 'normal',
    heightNum: 3,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('.project2'),
    },
    values: {},
  },
  {
    type: 'sticky',
    heightNum: 3,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('.project3'),
    },
    values: {},
  },
  {
    type: 'sticky',
    heightNum: 3,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('.project4'),
    },
    values: {},
  },
];

export { sceneInfo };
