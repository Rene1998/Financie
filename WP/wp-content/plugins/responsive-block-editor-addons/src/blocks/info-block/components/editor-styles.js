/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    block_id,
    resheadingAlign,
    resheadingColor,
    ressubheadingColor,
    resprefixColor,
    resprefixFontSize,
    resprefixFontWeight,
    resprefixLineHeight,
    resheadFontFamily,
    resheadFontSize,
    resheadFontSizeTablet,
    resheadFontSizeMobile,
    resheadFontWeight,
    resheadLineHeight,
    ressubHeadFontFamily,
    ressubHeadFontSize,
    ressubHeadFontSizeTablet,
    ressubHeadFontSizeMobile,
    ressubHeadFontWeight,
    ressubHeadLineHeight,
    resseparatorWidthType,
    resheadSpace,
    ressubHeadSpace,
    resIconSize,
    resseperatorStyle,
    resseperatorWidth,
    resseperatorColor,
    resseperatorThickness,
    resctaLinkColor,
    resctaFontSize,
    resctaFontWeight,
    resctaBtnLinkColor,
    resctaBgColor,
    ctaBtnVertPadding,
    ctaBtnHrPadding,
    resctaBorderStyle,
    resctaBorderColor,
    resctaBorderWidth,
    resctaBorderRadius,
    resprefixSpace,
    iconLeftMargin,
    iconRightMargin,
    iconTopMargin,
    iconBottomMargin,
    imageWidth,
    imageWidthTablet,
    imageWidthMobile,
    blockBorderStyle,
    blockBorderWidth,
    blockBorderRadius,
    blockBorderColor,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    opacity,
    imgURL,
    hoverctaBtnLinkColor,
    hoverctaBgColor,
    hoverctaBorderColor,
    imagePosition,
    imageRepeat,
    thumbsize,
    backgroundAttachment,
    sepSpace,
    icon_color,
    icon_hcolor,
    resImageBorderColor,
    resImageBorderRadius,
    resImageBorderWidth,
    resImageBorderStyle,
    imageBoxShadowColor,
    imageBoxShadowHOffset,
    imageBoxShadowVOffset,
    imageBoxShadowBlur,
    imageBoxShadowSpread,
    imageBoxShadowPosition,
    alignment,
    imageopacity,
    boxBackgroundColor,
    contentPadding,
      imgiconPosition
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;
  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  let newopacity = opacity / 100;

  let imgopacity = imageopacity / 100;

  var imageBoxShadowPositionCSS = imageBoxShadowPosition;

  if ("outset" === imageBoxShadowPosition) {
    imageBoxShadowPositionCSS = "";
  }

  var selectors = {
    " ": {
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "background-color": `${hexToRgba(
        boxBackgroundColor || "#ffffff",
        newopacity || 0
      )}`,
      padding: generateCSSUnit(contentPadding, "px"),
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
      "box-shadow":
        generateCSSUnit(boxShadowHOffset, "px") +
        " " +
        generateCSSUnit(boxShadowVOffset, "px") +
        " " +
        generateCSSUnit(boxShadowBlur, "px") +
        " " +
        generateCSSUnit(boxShadowSpread, "px") +
        " " +
        boxShadowColor +
        " " +
        boxShadowPositionCSS,
    },

    " .responsive-block-editor-addons-ifb-image-icon-content.responsive-block-editor-addons-ifb-imgicon-wrap": {
      "margin-bottom": generateCSSUnit(iconBottomMargin, "px"),
      "margin-top": generateCSSUnit(iconTopMargin, "px"),
      "margin-left": generateCSSUnit(iconLeftMargin, "px"),
      "margin-right": generateCSSUnit(iconRightMargin, "px"),
    },

    " .responsive-block-editor-addons-ifb-icon": {
      "width": generateCSSUnit(resIconSize, "px"),
      "height": generateCSSUnit(resIconSize, "px"),
    },

    " .responsive-block-editor-addons-ifb-image-content > img": {
      "border-color": resImageBorderColor,
      "border-radius": generateCSSUnit(resImageBorderRadius, "px"),
      "border-width": generateCSSUnit(resImageBorderWidth, "px"),
      "border-style": resImageBorderStyle,
      "box-shadow":
        generateCSSUnit(imageBoxShadowHOffset, "px") +
        " " +
        generateCSSUnit(imageBoxShadowVOffset, "px") +
        " " +
        generateCSSUnit(imageBoxShadowBlur, "px") +
        " " +
        generateCSSUnit(imageBoxShadowSpread, "px") +
        " " +
        imageBoxShadowColor +
        " " +
        imageBoxShadowPositionCSS,
      opacity: imgopacity,
    },

    " .responsive-block-editor-addons-ifb-separator": {
      "border-width": generateCSSUnit(resseperatorThickness, "px"),
      "border-color": resseperatorColor,
      "border-top-style": resseperatorStyle,
      "width": generateCSSUnit(resseperatorWidth, resseparatorWidthType),
      "margin-bottom": generateCSSUnit(sepSpace, "px"),
    },

    " .responsive-block-editor-addons-ifb-cta-button": {
      "background-color": resctaBgColor,
      "border-color": resctaBorderColor,
    },

    " .responsive-block-editor-addons-ifb-cta-button .responsive-block-editor-addons-inline-editing": {
      "color": resctaBtnLinkColor,
    },

    " .responsive-block-editor-addons-ifb-cta-button:hover": {
      "background-color": hoverctaBgColor,
      "border-color": hoverctaBorderColor,
    },

    " .responsive-block-editor-addons-ifb-cta-button:hover .responsive-block-editor-addons-inline-editing": {
      "color": hoverctaBtnLinkColor,
    },

    " .responsive-block-editor-addons-ifb-icon svg": {
      "fill": icon_color,
    },

    " .responsive-block-editor-addons-ifb-icon:hover svg": {
      "fill": icon_hcolor,
    },

    " .responsive-block-editor-addons-infobox__content-wrap": {
      "text-align": (imgiconPosition == 'above-title' || imgiconPosition == 'below-title') ?resheadingAlign:'',
    },

    " .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-title": {
      "font-size": generateCSSUnit(resheadFontSize, "px !important"),
    },

    " .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-desc": {
      "font-size": generateCSSUnit(ressubHeadFontSize, "px !important"),
    },

    " .responsive-block-editor-addons-ifb-image-content img": {
      "width": generateCSSUnit(imageWidth, "px"),
      "max-width": generateCSSUnit(imageWidth, "px"),
    },

    " .responsive-block-editor-addons-cta-image": {
      "background-image": `url(${imgURL})`,
      "background-position": imagePosition,
      "background-repeat": imageRepeat,
      "background-size": thumbsize,
      "background-attachment": backgroundAttachment,
    },

    " .responsive-block-editor-addons-ifb-title-prefix": {
      "color": resprefixColor,
      "font-size": generateCSSUnit(resprefixFontSize, "px"),
      "font-weight": resprefixFontWeight,
      "line-height": resprefixLineHeight,
      "margin-bottom": generateCSSUnit(resprefixSpace, "px"),
    },

    " .responsive-block-editor-addons-ifb-title": {
      "color": resheadingColor,
      "font-family": resheadFontFamily,
      "font-weight": resheadFontWeight,
      "line-height": resheadLineHeight,
      "margin-bottom": generateCSSUnit(resheadSpace, "px"),
    },

    " .responsive-block-editor-addons-ifb-desc": {
      "color": ressubheadingColor,
      "font-family": ressubHeadFontFamily,
      "font-weight": ressubHeadFontWeight,
      "line-height": ressubHeadLineHeight,
      "margin-bottom": generateCSSUnit(ressubHeadSpace, "px"),
    },

    " .responsive-block-editor-addons-infobox-cta-link": {
      "color": resctaLinkColor,
      "padding-top": generateCSSUnit(ctaBtnVertPadding, "px"),
      "padding-bottom": generateCSSUnit(ctaBtnVertPadding, "px"),
      "padding-left": generateCSSUnit(ctaBtnHrPadding, "px"),
      "padding-right": generateCSSUnit(ctaBtnHrPadding, "px"),
      "font-size": generateCSSUnit(resctaFontSize, "px"),
      "font-weight": resctaFontWeight,
    },

    " .responsive-block-editor-addons-inline-editing ": {
      "color": resctaLinkColor,
      "font-size": generateCSSUnit(resctaFontSize, "px"),
    },

    " .responsive-block-editor-addons-infobox-cta-link.responsive-block-editor-addons-ifb-cta-button": {
      "border-width": generateCSSUnit(resctaBorderWidth, "px"),
      "border-style": resctaBorderStyle,
      "border-radius": generateCSSUnit(resctaBorderRadius, "px"),
      "padding-top": generateCSSUnit(ctaBtnVertPadding, "px"),
      "padding-bottom": generateCSSUnit(ctaBtnVertPadding, "px"),
      "padding-left": generateCSSUnit(ctaBtnHrPadding, "px"),
      "padding-right": generateCSSUnit(ctaBtnHrPadding, "px"),
      "font-size": generateCSSUnit(resctaFontSize, "px"),
      "font-weight": resctaFontWeight,
    },
  };

  var mobile_selectors = {
    " .responsive-block-editor-addons-infobox__content-wrap.responsive-block-editor-addons-infobox-stacked-mobile .responsive-block-editor-addons-ifb-content": {
      "text-align": alignment,
    },

    " .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-title": {
      "font-size": generateCSSUnit(resheadFontSizeMobile, "px"),
    },

    " .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-desc": {
      "font-size": generateCSSUnit(ressubHeadFontSizeMobile, "px !important"),
    },

    " .responsive-block-editor-addons-ifb-image-content img": {
      "width": generateCSSUnit(imageWidthMobile, "px"),
      "max-width": generateCSSUnit(imageWidthMobile, "px"),
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-infobox__content-wrap.responsive-block-editor-addons-infobox-stacked-tablet .responsive-block-editor-addons-ifb-content": {
      "text-align": alignment,
    },

    " .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-title": {
      "font-size": generateCSSUnit(resheadFontSizeTablet, "px"),
    },

    " .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-desc": {
      "font-size": generateCSSUnit(ressubHeadFontSizeTablet, "px !important"),
    },

    " .responsive-block-editor-addons-ifb-image-content img": {
      "width": generateCSSUnit(imageWidthTablet, "px"),
      "max-width": generateCSSUnit(imageWidthTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-info-block.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
