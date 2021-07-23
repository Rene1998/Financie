const ITEM_COUNT = 2;

const { __ } = wp.i18n;

const teamBlock = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  teamBlock.push({
    teamName: __("John Doe", "responsive-block-editor-addons"),
    teamDesignation: __("Designation", "responsive-block-editor-addons"),
    teamDescription: __(
      "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      "responsive-block-editor-addons"
    ),
    teamImgURL: "",
    teamImgId: "",
    twitterUrl: "",
    facebookUrl: "",
    linkedinUrl: "",
    instagramUrl: "",
    youtubeUrl: "",
    pinterestUrl: "",
    emailAddress: "",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  teamBlock: {
    type: "array",
    default: teamBlock,
  },
  counterId: {
    type: "string",
    default: 1,
  },
  count: {
    type: "number",
    default: ITEM_COUNT,
  },
  gutter: {
    type: "string",
    default: "medium",
  },
  designationColor: {
    type: "string",
  },
  descriptionColor: {
    type: "string",
  },
  socialIconColor: {
    type: "string",
    default: "#0066CC",
  },
  titleColor: {
    type: "string",
  },
  titleFontWeight: {
    type: "string",
  },
  designationFontWeight: {
    type: "string",
  },
  descriptionFontWeight: {
    type: "string",
  },
  titleLineHeight: {
    type: "number",
  },
  designationLineHeight: {
    type: "number",
  },
  descriptionLineHeight: {
    type: "number",
  },
  imageSize: {
    type: "string",
    default: "full",
  },
  titleFontFamily: {
    type: "string",
  },
  designationFontFamily: {
    type: "string",
  },
  descriptionFontFamily: {
    type: "string",
  },
  titleFontSize: {
    type: "number",
    default: 23,
  },
  designationFontSize: {
    type: "number",
    default: 15,
  },
  descriptionFontSize: {
    type: "number",
    default: 15,
  },
  socialIconFontSize: {
    type: "number",
    default: 23,
  },
  imageMarginTop: {
    type: "number",
  },
  imageMarginBottom: {
    type: "number",
  },
  iconSize: {
    type: "string",
  },
  titleSpacing: {
    type: "number",
  },
  designationSpacing: {
    type: "number",
  },
  descriptionSpacing: {
    type: "number",
  },
  socialIconSpacing: {
    type: "number",
  },
  imageStyle: {
    type: "number",
    default: "0%",
  },
  imageWidth: {
    type: "number",
    default: 120,
  },
  backgroundColor: {
    type: "string",
  },
  borderColor: {
    type: "string",
  },
  borderWidth: {
    type: "number",
    default: 2,
  },
  borderRadius: {
    type: "number",
    default: 2,
  },
  padding: {
    type: "number",
    default: 2,
  },
  alignment: {
    type: "string",
    default: "center",
  },
  imageShape: {
    type: "string",
  },
  boxShadowColor: {
    type: "string",
  },
  boxShadowHOffset: {
    type: "number",
    default: 0,
  },
  boxShadowVOffset: {
    type: "number",
    default: 0,
  },
  boxShadowBlur: {
    type: "number",
    default: 0,
  },
  boxShadowSpread: {
    type: "number",
    default: 0,
  },
  boxShadowPosition: {
    type: "string",
    default: "outset",
  },
  opacity: {
    type: "number",
    default: 50,
  },
  secondaryBackgroundColor: {
    type: "string",
  },
  gradientDegree: {
    type: "number",
    default: 100,
  },
  colorLocation1: {
    type: "number",
    default: 0,
  },
  colorLocation2: {
    type: "number",
    default: 100,
  },
  bgGradient: {
    type: "bool",
  },
  backgroundImage: {
    type: "string",
  },
  backgroundPosition: {
    type: "string",
    default: "center-center",
  },
  backgroundRepeat: {
    type: "string",
    default: "no-repeat",
  },
  backgroundSize: {
    type: "string",
    default: "cover",
  },
  backgroundAttachment: {
    type: "string",
    default: "scroll",
  },
  showImage: {
    type: "bool",
    default: true,
  },
  showName: {
    type: "bool",
    default: true,
  },
  showDesignation: {
    type: "bool",
    default: true,
  },
  showDescription: {
    type: "bool",
    default: true,
  },
  showSocialIcons: {
    type: "bool",
    default: true,
  },
  facebook: {
    type: "bool",
  },
  twitter: {
    type: "bool",
  },
  linkedin: {
    type: "bool",
  },
  instagram: {
    type: "bool",
  },
  email: {
    type: "bool",
  },
  youtube: {
    type: "bool",
  },
  pinterest: {
    type: "bool",
  },
};
export default attributes;
