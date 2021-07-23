/**
 * Inspector Controls
 */

import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import BoxShadowControl from "../../../utils/components/box-shadow";
import icons from "./../../../utils/components/icons";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  RichText,
  AlignmentToolbar,
  BlockControls,
  MediaUpload,
  ColorPalette,
} = wp.editor;

// Import Inspector components
const {
  PanelBody,
  ToggleControl,
  RangeControl,
  SelectControl,
  TextControl,
  BaseControl,
  Button,
  ButtonGroup,
  Icon,
  TabPanel,
  Dashicon,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.getIfbIcon = this.getIfbIcon.bind(this);
    this.toggleTarget = this.toggleTarget.bind(this);
    this.toggleResponsive = this.toggleResponsive.bind(this);
    this.getCtaicon = this.getCtaicon.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
  }

  getIfbIcon(value) {
    this.props.setAttributes({ icon: value });
  }

  getCtaicon(value) {
    this.props.setAttributes({ ctaIcon: value });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectImage(media) {
    const { iconImage } = this.props.attributes;
    const { setAttributes } = this.props;

    if (!media || !media.url) {
      setAttributes({ iconImage: null });
      return;
    }

    if (!media.type || "image" !== media.type) {
      setAttributes({ iconImage: null });
      return;
    }
    setAttributes({ iconImage: media });
  }

  /*
   * Event to set Image as null while removing.
   */
  onRemoveImage() {
    const { setAttributes } = this.props;

    setAttributes({ iconImage: null });
  }

  /**
   * Function Name: toggleTarget.
   */
  toggleTarget() {
    const { resctaTarget } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ resctaTarget: !resctaTarget });
  }

  /**
   * Function Name: toggleResponsive.
   */
  toggleResponsive() {
    const { responsiveDesign } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ responsiveDesign: !responsiveDesign });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        resheadingAlign,
        resheadingColor,
        ressubheadingColor,
        resprefixColor,
        resprefixFontSize,
        resprefixFontWeight,
        resprefixLineHeight,
        resheadingTag,
        resheadFontFamily,
        resheadFontSize,
        resheadFontSizeMobile,
        resheadFontSizeTablet,
        resheadFontWeight,
        resheadLineHeight,
        ressubHeadFontFamily,
        ressubHeadFontSize,
        ressubHeadFontSizeTablet,
        ressubHeadFontSizeMobile,
        ressubHeadFontWeight,
        ressubHeadLineHeight,
        resseparatorWidthType,
        resseperatorSpace,
        resheadSpace,
        ressubHeadSpace,
        icon,
        iconColor,
        resIconSize,
        imgiconPosition,
        source_type,
        ressourceAlign,
        ressourceAlignMobile,
        ressourceAlignTablet,
        resseperatorPosition,
        resseperatorStyle,
        resseperatorWidth,
        resseperatorColor,
        resseperatorThickness,
        resctaType,
        resctaText,
        resctaLink,
        resctaTarget,
        ctaIcon,
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
        iconImage,
        imageSize,
        imageWidth,
        imageWidthTablet,
        imageWidthMobile,
        imageWidthType,
        stack,
        resshowPrefix,
        resshowTitle,
        resshowDesc,
        inheritFromTheme,
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
        imageBoxShadowColor,
        imageBoxShadowHOffset,
        imageBoxShadowVOffset,
        imageBoxShadowBlur,
        imageBoxShadowSpread,
        imageBoxShadowPosition,
        boxBackgroundColor,
        contentPadding,
        opacity,
        dimRatio,
        imgURL,
        imgID,
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
        alignment,
        imageopacity,
      },
      setAttributes,
    } = this.props;

    // Font Weight Options
    const fontWeightOptions = [
      {
        value: "100",
        label: __("100", "responsive-block-editor-addons"),
      },
      {
        value: "200",
        label: __("200", "responsive-block-editor-addons"),
      },
      {
        value: "300",
        label: __("300", "responsive-block-editor-addons"),
      },
      {
        value: "400",
        label: __("400", "responsive-block-editor-addons"),
      },
      {
        value: "500",
        label: __("500", "responsive-block-editor-addons"),
      },
      {
        value: "600",
        label: __("600", "responsive-block-editor-addons"),
      },
      {
        value: "700",
        label: __("700", "responsive-block-editor-addons"),
      },
      {
        value: "800",
        label: __("800", "responsive-block-editor-addons"),
      },
      {
        value: "900",
        label: __("900", "responsive-block-editor-addons"),
      },
    ];
    // Update color values
    const onChangeBackgroundColor = (value) =>
      setAttributes({ boxBackgroundColor: value });

    // Change the image
    const onSelectBgImage = (img) => {
      setAttributes({
        imgID: img.id,
        imgURL: img.url,
        imgAlt: img.alt,
      });
    };

    // Clear the image
    const onRemoveBgImage = () => {
      setAttributes({
        imgID: null,
        imgURL: null,
        imgAlt: null,
      });
    };

    // Icon properties.
    const icon_props = {
      icons: svg_icons,
      value: icon,
      onChange: this.getIfbIcon,
      isMulti: false,
      renderFunc: renderSVG,
      noSelectedPlaceholder: __(
        "Select Icon",
        "responsive-block-editor-addons"
      ),
    };

    // Settings for icon.
    const iconControls = (
      <Fragment>
        <FontIconPicker {...icon_props} />
        <RangeControl
          label={__("Icon Size", "responsive-block-editor-addons")}
          value={resIconSize}
          onChange={(value) =>
            setAttributes({ resIconSize: value !== undefined ? value : 40 })
          }
          min={10}
          max={300}
          beforeIcon=""
          allowReset
        />
        <p className="responsive-block-editor-addons-setting-label">
          {__("Icon Color", "responsive-block-editor-addons")}
          <span className="components-base-control__label">
            <span
              className="component-color-indicator"
              style={{ backgroundColor: icon_color }}
            ></span>
          </span>
        </p>
        <ColorPalette
          value={icon_color}
          onChange={(value) => setAttributes({ icon_color: value })}
          allowReset
        />
        <p className="responsive-block-editor-addons-setting-label">
          {__("Icon Hover Color", "responsive-block-editor-addons")}
          <span className="components-base-control__label">
            <span
              className="component-color-indicator"
              style={{ backgroundColor: icon_hcolor }}
            ></span>
          </span>
        </p>
        <ColorPalette
          value={icon_hcolor}
          onChange={(value) => setAttributes({ icon_hcolor: value })}
          allowReset
        />
      </Fragment>
    );

    let image_name = __("Select Image", "responsive-block-editor-addons");
    if (iconImage) {
      if (iconImage.url == null || iconImage.url == "") {
        image_name = __("Select Image", "responsive-block-editor-addons");
      } else {
        image_name = __("Replace Image", "responsive-block-editor-addons");
      }
    }

    // Update color values
    const onChangeiconColor = (value) => setAttributes({ iconColor: value });
    var advancedControls;
    var boxShadowAdvancedControls;
    var resetBoxShadowAdvancedControls;
    advancedControls = (
      <Fragment>
        <p className="responsive-block-editor-addons-setting-label">
          {__("Color", "responsive-block-editor-addons")}
          <span className="components-base-control__label">
            <span
              className="component-color-indicator"
              style={{ backgroundColor: imageBoxShadowColor }}
            ></span>
          </span>
        </p>
        <ColorPalette
          value={imageBoxShadowColor}
          onChange={(colorValue) =>
            setAttributes({
              imageBoxShadowColor: colorValue !== undefined ? colorValue : "",
            })
          }
          allowReset
        />
        <h2>{__("Horizontal", "responsive-block-editor-addons")}</h2>
        <RangeControl
          value={imageBoxShadowHOffset}
          onChange={(value) =>
            setAttributes({
              imageBoxShadowHOffset: value !== undefined ? value : 0,
            })
          }
          min={-100}
          max={100}
          allowReset
        />
        <h2>{__("Vertical", "responsive-block-editor-addons")}</h2>
        <RangeControl
          value={imageBoxShadowVOffset}
          onChange={(value) =>
            setAttributes({
              imageBoxShadowVOffset: value !== undefined ? value : 0,
            })
          }
          min={-100}
          max={100}
          allowReset
        />
        <h2>{__("Blur", "responsive-block-editor-addons")}</h2>
        <RangeControl
          value={imageBoxShadowBlur}
          onChange={(value) =>
            setAttributes({
              imageBoxShadowBlur: value !== undefined ? value : 0,
            })
          }
          min={0}
          max={100}
          allowReset
        />
        <h2>{__("Spread", "responsive-block-editor-addons")}</h2>
        <RangeControl
          value={imageBoxShadowSpread}
          onChange={(value) =>
            setAttributes({
              imageBoxShadowSpread: value !== undefined ? value : 0,
            })
          }
          min={0}
          max={100}
          allowReset
        />
        <SelectControl
          label={__("Position", "responsive-block-editor-addons")}
          value={imageBoxShadowPosition}
          onChange={(value) => setAttributes({ imageBoxShadowPosition: value })}
          options={[
            { value: "inset", label: __("Inset") },
            { value: "outset", label: __("Outset") },
          ]}
        />
      </Fragment>
    );

    const imageControls = (
      <Fragment>
        <BaseControl
          className="editor-bg-image-control"
          label={__("Image", "responsive-block-editor-addons")}
        >
          <MediaUpload
            title={__("Select Image", "responsive-block-editor-addons")}
            onSelect={this.onSelectImage}
            allowedTypes={["image"]}
            value={iconImage}
            render={({ open }) => (
              <Button isDefault onClick={open}>
                {image_name}
              </Button>
            )}
          />
          {iconImage && iconImage.url !== "null" && iconImage.url !== "" && (
            <Button
              className="responsive-block-editor-addons-rm-btn"
              onClick={this.onRemoveImage}
              isLink
              isDestructive
            >
              {__("Remove Image", "responsive-block-editor-addons")}
            </Button>
          )}
          {iconImage && iconImage.url !== "null" && iconImage.url !== "" && (
            <RangeControl
              label={__("Image Opacity", "responsive-block-editor-addons")}
              value={imageopacity}
              onChange={(value) =>
                setAttributes({
                  imageopacity: value !== undefined ? value : 100,
                })
              }
              min={0}
              max={100}
              allowReset
            />
          )}
        </BaseControl>
        {iconImage && iconImage.url !== "null" && iconImage.url !== "" && (
          <Fragment>
            <ToggleControl
              label={__("Custom Width", "responsive-block-editor-addons")}
              checked={imageWidthType}
              onChange={(value) =>
                setAttributes({ imageWidthType: !imageWidthType })
              }
              help={__(
                "Turn this off to inherit the natural width of Image.",
                "responsive-block-editor-addons"
              )}
            />
            {imageWidthType && (
              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__(
                            "Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={imageWidthMobile}
                          onChange={(value) =>
                            setAttributes({
                              imageWidthMobile: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__(
                            "Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={imageWidthTablet}
                          onChange={(value) =>
                            setAttributes({
                              imageWidthTablet: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__(
                            "Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={imageWidth}
                          onChange={(value) =>
                            setAttributes({
                              imageWidth: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
            )}
            <PanelBody
              title={__(
                "Image Border Settings",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
              <SelectControl
                label={__("Border Style", "responsive-block-editor-addons")}
                value={resImageBorderStyle}
                onChange={(value) =>
                  setAttributes({ resImageBorderStyle: value })
                }
                options={[
                  {
                    value: "none",
                    label: __("None", "responsive-block-editor-addons"),
                  },
                  {
                    value: "solid",
                    label: __("Solid", "responsive-block-editor-addons"),
                  },
                  {
                    value: "dotted",
                    label: __("Dotted", "responsive-block-editor-addons"),
                  },
                  {
                    value: "dashed",
                    label: __("Dashed", "responsive-block-editor-addons"),
                  },
                  {
                    value: "double",
                    label: __("Double", "responsive-block-editor-addons"),
                  },
                  {
                    value: "groove",
                    label: __("Groove", "responsive-block-editor-addons"),
                  },
                  {
                    value: "inset",
                    label: __("Inset", "responsive-block-editor-addons"),
                  },
                  {
                    value: "outset",
                    label: __("Outset", "responsive-block-editor-addons"),
                  },
                  {
                    value: "ridge",
                    label: __("Ridge", "responsive-block-editor-addons"),
                  },
                ]}
              />
              {"none" != resImageBorderStyle && (
                <Fragment>
                  <RangeControl
                    label={__("Border Width", "responsive-block-editor-addons")}
                    value={resImageBorderWidth}
                    onChange={(value) =>
                      setAttributes({
                        resImageBorderWidth: value !== undefined ? value : 2,
                      })
                    }
                    min={0}
                    max={50}
                    allowReset
                  />
                  <Fragment>
                    <p>
                      {__("Border Color", "responsive-block-editor-addons")}
                      <span className="components-base-control__label">
                        <span
                          className="component-color-indicator"
                          style={{ backgroundColor: resImageBorderColor }}
                        ></span>
                      </span>
                    </p>
                    <ColorPalette
                      value={resImageBorderColor}
                      onChange={(colorValue) =>
                        setAttributes({
                          resImageBorderColor:
                            colorValue !== undefined ? colorValue : "#000",
                        })
                      }
                      allowReset
                    />
                  </Fragment>

                  <RangeControl
                    label={__(
                      "Border Radius",
                      "responsive-block-editor-addons"
                    )}
                    value={resImageBorderRadius}
                    onChange={(value) =>
                      setAttributes({
                        resImageBorderRadius: value !== undefined ? value : "",
                      })
                    }
                    min={0}
                    max={100}
                    allowReset
                  />
                </Fragment>
              )}
            </PanelBody>
            <PanelBody
              title={__("Image Box Shadow", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {advancedControls}
            </PanelBody>
          </Fragment>
        )}
      </Fragment>
    );

    return (
      <InspectorControls key="inspector">
        <PanelBody title={__("Image/Icon", "responsive-block-editor-addons")}>
          <SelectControl
            label={__("Select Position", "responsive-block-editor-addons")}
            value={imgiconPosition}
            onChange={(value) => setAttributes({ imgiconPosition: value })}
            options={[
              {
                value: "above-title",
                label: __("Above Title", "responsive-block-editor-addons"),
              },
              {
                value: "below-title",
                label: __("Below Title", "responsive-block-editor-addons"),
              },
              {
                value: "left-title",
                label: __("Left of Title", "responsive-block-editor-addons"),
              },
              {
                value: "right-title",
                label: __("Right of Title", "responsive-block-editor-addons"),
              },
              {
                value: "left",
                label: __(
                  "Left of Text and Title",
                  "responsive-block-editor-addons"
                ),
              },
              {
                value: "right",
                label: __(
                  "Right of Text and Title",
                  "responsive-block-editor-addons"
                ),
              },
            ]}
          />
          {(imgiconPosition == "left" || imgiconPosition == "right") && (
            <Fragment>
              <SelectControl
                label={__("Stack on", "responsive-block-editor-addons")}
                value={stack}
                options={[
                  {
                    value: "none",
                    label: __("None", "responsive-block-editor-addons"),
                  },
                  {
                    value: "tablet",
                    label: __("Tablet", "responsive-block-editor-addons"),
                  },
                  {
                    value: "mobile",
                    label: __("Mobile", "responsive-block-editor-addons"),
                  },
                ]}
                help={__(
                  "Note: Choose on what breakpoint the Info Box will stack."
                )}
                onChange={(value) => setAttributes({ stack: value })}
              />
              <p>
                {__("Alignment when stacked", "responsive-block-editor-addons")}
              </p>
              <AlignmentToolbar
                value={alignment}
                onChange={(value) =>
                  setAttributes({
                    alignment: value,
                  })
                }
                controls={["left", "center", "right", "full"]}
                isCollapsed={false}
              />
            </Fragment>
          )}
          <hr className="responsive-block-editor-addons-editor__separator" />

          <SelectControl
            label={__("Select Source", "responsive-block-editor-addons")}
            value={source_type}
            onChange={(value) => setAttributes({ source_type: value })}
            options={[
              {
                value: "none",
                label: __("None", "responsive-block-editor-addons"),
              },
              {
                value: "icon",
                label: __("Icon", "responsive-block-editor-addons"),
              },
              {
                value: "image",
                label: __("Image", "responsive-block-editor-addons"),
              },
            ]}
          />

          {imgiconPosition &&
            imgiconPosition !== "above-title" &&
            imgiconPosition !== "below-title" && (
              <SelectControl
                 label={__(
                   "Vertical Alignment",
                   "responsive-block-editor-addons"
                 )}
                 value={ressourceAlign}
                 onChange={(value) => setAttributes({ ressourceAlign: value })}
                 options={[
                   {
                     value: "top",
                     label: __("Top", "responsive-block-editor-addons"),
                   },
                   {
                     value: "middle",
                     label: __("Middle", "responsive-block-editor-addons"),
                   },
                 ]}
               />
            )}

            {(stack==='none' || stack==='mobile') && imgiconPosition &&
            imgiconPosition !== "above-title" &&
            imgiconPosition !== "below-title" && (
              <SelectControl
                 label={__(
                   "Vertical Alignment Tablet",
                   "responsive-block-editor-addons"
                 )}
                 value={ressourceAlignTablet}
                 onChange={(value) => setAttributes({ ressourceAlignTablet: value })}
                 options={[
                   {
                     value: "top",
                     label: __("Top", "responsive-block-editor-addons"),
                   },
                   {
                     value: "middle",
                     label: __("Middle", "responsive-block-editor-addons"),
                   },
                 ]}
               />
            )}

            {stack==='none' && imgiconPosition &&
            imgiconPosition !== "above-title" &&
            imgiconPosition !== "below-title" && (
              <SelectControl
                 label={__(
                   "Vertical Alignment Mobile",
                   "responsive-block-editor-addons"
                 )}
                 value={ressourceAlignMobile}
                 onChange={(value) => setAttributes({ ressourceAlignMobile: value })}
                 options={[
                   {
                     value: "top",
                     label: __("Top", "responsive-block-editor-addons"),
                   },
                   {
                     value: "middle",
                     label: __("Middle", "responsive-block-editor-addons"),
                   },
                 ]}
               />
            )}

          {source_type && source_type == "icon" && iconControls}

          {source_type && source_type == "image" && imageControls}
        </PanelBody>

        <PanelBody
          title={__("Background Options", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <p>
            {__("Select a background image:", "responsive-block-editor-addons")}
          </p>
          <MediaUpload
            onSelect={onSelectBgImage}
            type="image"
            value={imgID}
            render={({ open }) => (
              <div>
                <Button
                  className="responsive-block-editor-addons-cta-inspector-media"
                  label={__("Edit image", "responsive-block-editor-addons")}
                  onClick={open}
                >
                  <Icon icon="format-image" />
                  {__("Select Image", "responsive-block-editor-addons")}
                </Button>

                {imgURL && !!imgURL.length && (
                  <Button
                    className="responsive-block-editor-addons-cta-inspector-media"
                    label={__("Remove Image", "responsive-block-editor-addons")}
                    onClick={onRemoveBgImage}
                  >
                    <Icon icon="dismiss" />
                    {__("Remove", "responsive-block-editor-addons")}
                  </Button>
                )}
              </div>
            )}
          ></MediaUpload>

          {imgURL && !!imgURL.length && (
            <RangeControl
              label={__("Image Opacity", "responsive-block-editor-addons")}
              value={dimRatio}
              onChange={(value) =>
                this.props.setAttributes({
                  dimRatio: value,
                })
              }
              min={0}
              max={100}
              step={10}
            />
          )}
          {imgURL && !!imgURL.length && (
            <PanelBody
              title={__("Image Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
                         {" "}
              <SelectControl
                label={__("Image Position", "responsive-block-editor-addons")}
                value={imagePosition}
                onChange={(value) => setAttributes({ imagePosition: value })}
                options={[
                  {
                    value: "top left",
                    label: __("Top Left", "responsive-block-editor-addons"),
                  },
                  {
                    value: "top center",
                    label: __("Top Center", "responsive-block-editor-addons"),
                  },
                  {
                    value: "top right",
                    label: __("Top Right", "responsive-block-editor-addons"),
                  },
                  {
                    value: "center left",
                    label: __("Center Left", "responsive-block-editor-addons"),
                  },
                  {
                    value: "center center",
                    label: __("Center Center", "responsive-block-editor-addons"),
                  },
                  {
                    value: "center right",
                    label: __("Center Right", "responsive-block-editor-addons"),
                  },
                  {
                    value: "bottom left",
                    label: __("Bottom Left", "responsive-block-editor-addons"),
                  },
                  {
                    value: "bottom center",
                    label: __(
                      "Bottom Center",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "bottom right",
                    label: __("Bottom Right", "responsive-block-editor-addons"),
                  },
                ]}
              />
              <SelectControl
                label={__("Attachment")}
                value={backgroundAttachment}
                onChange={(value) =>
                  setAttributes({ backgroundAttachment: value })
                }
                options={[
                  { value: "fixed", label: __("Fixed") },
                  { value: "scroll", label: __("Scroll") },
                ]}
              />
                         {" "}
              <SelectControl
                label={__("Image Repeat", "responsive-block-editor-addons")}
                value={imageRepeat}
                onChange={(value) => setAttributes({ imageRepeat: value })}
                options={[
                  {
                    value: "no-repeat",
                    label: __("No Repeat", "responsive-block-editor-addons"),
                  },
                  {
                    value: "repeat",
                    label: __("Repeat", "responsive-block-editor-addons"),
                  },
                  {
                    value: "repeat-x",
                    label: __("Repeat-X", "responsive-block-editor-addons"),
                  },
                  {
                    value: "repeat-y",
                    label: __("Repeat-Y", "responsive-block-editor-addons"),
                  },
                ]}
              />
                         {" "}
              <SelectControl
                label={__("Image Size", "responsive-block-editor-addons")}
                value={thumbsize}
                onChange={(value) => setAttributes({ thumbsize: value })}
                options={[
                  {
                    value: "cover",
                    label: __("Cover", "responsive-block-editor-addons"),
                  },
                  {
                    value: "auto",
                    label: __("Auto", "responsive-block-editor-addons"),
                  },
                  {
                    value: "contain",
                    label: __("Contain", "responsive-block-editor-addons"),
                  },
                ]}
              />
                       {" "}
            </PanelBody>
          )}
          <PanelColorSettings
            title={__("Background Color", "responsive-block-editor-addons")}
            initialOpen={false}
            colorSettings={[
              {
                value: boxBackgroundColor,
                onChange: onChangeBackgroundColor,
                label: __("Background Color", "responsive-block-editor-addons"),
              },
            ]}
          >
            <RangeControl
              label={__("Opacity", "responsive-block-editor-addons")}
              value={opacity}
              onChange={(value) =>
                setAttributes({ opacity: value !== undefined ? value : 100 })
              }
              min={0}
              max={100}
              allowReset
            />
          </PanelColorSettings>
        </PanelBody>

        <PanelBody
          title={__("Spacing", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <RangeControl
            label={__("Content Padding", "atomic-blocks")}
            value={contentPadding}
            onChange={(value) =>
              setAttributes({
                contentPadding: value !== undefined ? value : 0,
              })
            }
            min={0}
            max={50}
            step={1}
          />
          <RangeControl
            label={__("Prefix Bottom Margin", "responsive-block-editor-addons")}
            value={resprefixSpace}
            onChange={(value) =>
              setAttributes({ resprefixSpace: value !== undefined ? value : 5 })
            }
            min={0}
            max={50}
            allowReset
          />
          <RangeControl
            label={__("Title Bottom Margin", "responsive-block-editor-addons")}
            value={resheadSpace}
            onChange={(value) =>
              setAttributes({ resheadSpace: value !== undefined ? value : 10 })
            }
            min={0}
            max={50}
            allowReset
          />
          <RangeControl
            label={__(
              "Separator Bottom Margin",
              "responsive-block-editor-addons"
            )}
            value={sepSpace}
            onChange={(value) =>
              setAttributes({ sepSpace: value !== undefined ? value : 10 })
            }
            min={0}
            max={50}
            allowReset
          />
          <RangeControl
            label={__(
              "Description Bottom Margin",
              "responsive-block-editor-addons"
            )}
            value={ressubHeadSpace}
            onChange={(value) =>
              setAttributes({
                ressubHeadSpace: value !== undefined ? value : 10,
              })
            }
            min={0}
            max={50}
            allowReset
          />
          <hr className="responsive-block-editor-addons-editor__separator" />
          <h3>{__("Image/Icon Margin", "responsive-block-editor-addons")}</h3>
          <RangeControl
            label={__("Top Margin", "responsive-block-editor-addons")}
            value={iconTopMargin}
            onChange={(value) => setAttributes({ iconTopMargin: value })}
            min={0}
            max={50}
          />
          <RangeControl
            label={__("Bottom Margin", "responsive-block-editor-addons")}
            value={iconBottomMargin}
            onChange={(value) => setAttributes({ iconBottomMargin: value })}
            min={0}
            max={50}
          />
          <RangeControl
            label={__("Left Margin", "responsive-block-editor-addons")}
            value={iconLeftMargin}
            onChange={(value) => setAttributes({ iconLeftMargin: value })}
            min={0}
            max={50}
          />
          <RangeControl
            label={__("Right Margin", "responsive-block-editor-addons")}
            value={iconRightMargin}
            onChange={(value) => setAttributes({ iconRightMargin: value })}
            min={0}
            max={50}
          />
        </PanelBody>

        <PanelBody
          title={__("Border", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <SelectControl
            label={__("Border Style")}
            value={blockBorderStyle}
            onChange={(value) => setAttributes({ blockBorderStyle: value })}
            options={[
              {
                value: "none",
                label: __("None", "responsive-block-editor-addons"),
              },
              {
                value: "solid",
                label: __("Solid", "responsive-block-editor-addons"),
              },
              {
                value: "dotted",
                label: __("Dotted", "responsive-block-editor-addons"),
              },
              {
                value: "dashed",
                label: __("Dashed", "responsive-block-editor-addons"),
              },
              {
                value: "double",
                label: __(
                  "Double",
                  "responsive-block-editor-addons",
                  "responsive-block-editor-addons"
                ),
              },
              {
                value: "groove",
                label: __("Groove", "responsive-block-editor-addons"),
              },
              {
                value: "inset",
                label: __("Inset", "responsive-block-editor-addons"),
              },
              {
                value: "outset",
                label: __("Outset", "responsive-block-editor-addons"),
              },
              {
                value: "ridge",
                label: __("Ridge", "responsive-block-editor-addons"),
              },
            ]}
          />
          {"none" != blockBorderStyle && (
            <RangeControl
              label={__("Border Width", "responsive-block-editor-addons")}
              value={blockBorderWidth}
              onChange={(value) =>
                setAttributes({
                  blockBorderWidth: value !== undefined ? value : 1,
                })
              }
              min={0}
              max={50}
              allowReset
            />
          )}
          <RangeControl
            label={__("Border Radius", "responsive-block-editor-addons")}
            value={blockBorderRadius}
            onChange={(value) =>
              setAttributes({
                blockBorderRadius: value !== undefined ? value : null,
              })
            }
            min={0}
            max={1000}
            allowReset
          />
          {"none" != blockBorderStyle && (
            <Fragment>
              <p className="responsive-setting-label">
                {__("Border Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: blockBorderColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={blockBorderColor}
                onChange={(colorValue) =>
                  setAttributes({ blockBorderColor: colorValue })
                }
                allowReset
              />
            </Fragment>
          )}
          <BoxShadowControl
            setAttributes={setAttributes}
            label={__("Box Shadow", "responsive-block-editor-addons")}
            boxShadowColor={{ value: boxShadowColor, label: __("Color") }}
            boxShadowHOffset={{
              value: boxShadowHOffset,
              label: __("Horizontal", "responsive-block-editor-addons"),
            }}
            boxShadowVOffset={{
              value: boxShadowVOffset,
              label: __("Vertical", "responsive-block-editor-addons"),
            }}
            boxShadowBlur={{
              value: boxShadowBlur,
              label: __("Blur", "responsive-block-editor-addons"),
            }}
            boxShadowSpread={{
              value: boxShadowSpread,
              label: __("Spread", "responsive-block-editor-addons"),
            }}
            boxShadowPosition={{
              value: boxShadowPosition,
              label: __("Position", "responsive-block-editor-addons"),
            }}
          />
        </PanelBody>

        <PanelBody
          title={__("Separator", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <SelectControl
            label={__("Position", "responsive-block-editor-addons")}
            value={resseperatorPosition}
            onChange={(value) => setAttributes({ resseperatorPosition: value })}
            options={[
              {
                value: "after_icon",
                label: __("After Icon/Image", "responsive-block-editor-addons"),
              },
              {
                value: "after_prefix",
                label: __("After Prefix", "responsive-block-editor-addons"),
              },
              {
                value: "after_title",
                label: __("After Title", "responsive-block-editor-addons"),
              },
              {
                value: "after_desc",
                label: __(
                  "After Description",
                  "responsive-block-editor-addons"
                ),
              },
            ]}
          />
          <SelectControl
            label={__("Style", "responsive-block-editor-addons")}
            value={resseperatorStyle}
            onChange={(value) => setAttributes({ resseperatorStyle: value })}
            options={[
              {
                value: "none",
                label: __("None", "responsive-block-editor-addons"),
              },
              {
                value: "solid",
                label: __("Solid", "responsive-block-editor-addons"),
              },
              {
                value: "double",
                label: __("Double", "responsive-block-editor-addons"),
              },
              {
                value: "dashed",
                label: __("Dashed", "responsive-block-editor-addons"),
              },
              {
                value: "dotted",
                label: __("Dotted", "responsive-block-editor-addons"),
              },
            ]}
          />
          {"none" !== resseperatorStyle && (
            <Fragment>
              <RangeControl
                label={__("Thickness", "responsive-block-editor-addons")}
                value={resseperatorThickness}
                onChange={(value) =>
                  setAttributes({
                    resseperatorThickness: value !== undefined ? value : 2,
                  })
                }
                min={1}
                max={100}
                beforeIcon=""
                allowReset
              />
              <ButtonGroup
                className="responsive-block-editor-addons-size-type-field"
                aria-label={__("Size Type", "responsive-block-editor-addons")}
              >
                <Button
                  key={"px"}
                  className="responsive-block-editor-addons-size-btn"
                  isSmall
                  isPrimary={resseparatorWidthType === "px"}
                  aria-pressed={resseparatorWidthType === "px"}
                  onClick={() => setAttributes({ resseparatorWidthType: "px" })}
                >
                  {"px"}
                </Button>
                <Button
                  key={"%"}
                  className="responsive-block-editor-addons-size-btn"
                  isSmall
                  isPrimary={resseparatorWidthType === "%"}
                  aria-pressed={resseparatorWidthType === "%"}
                  onClick={() => setAttributes({ resseparatorWidthType: "%" })}
                >
                  {"%"}
                </Button>
              </ButtonGroup>
              <RangeControl
                label={__("Width", "responsive-block-editor-addons")}
                value={resseperatorWidth}
                onChange={(value) =>
                  setAttributes({
                    resseperatorWidth: value !== undefined ? value : 30,
                  })
                }
                min={0}
                max={"%" == resseparatorWidthType ? 100 : 500}
                beforeIcon=""
                allowReset
              />
              <p className="responsive-block-editor-addons-setting-label">
                {__("Separator Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: resseperatorColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={resseperatorColor}
                onChange={(colorValue) =>
                  setAttributes({ resseperatorColor: colorValue })
                }
                allowReset
              />
            </Fragment>
          )}
        </PanelBody>

        <PanelBody
          title={__("Call To Action", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <SelectControl
            label={__("Type")}
            value={resctaType}
            onChange={(value) => setAttributes({ resctaType: value })}
            options={[
              {
                value: "none",
                label: __("None", "responsive-block-editor-addons"),
              },
              {
                value: "text",
                label: __("Text", "responsive-block-editor-addons"),
              },
              {
                value: "button",
                label: __("Button", "responsive-block-editor-addons"),
              },
            ]}
          />
          {(resctaType === "text" || resctaType === "button") && (
            <Fragment>
              <TextControl
                label={__("Text", "responsive-block-editor-addons")}
                value={resctaText}
                onChange={(value) => setAttributes({ resctaText: value })}
              />
            </Fragment>
          )}
          {resctaType !== "none" && (
            <Fragment>
              <TextControl
                label={__("Link", "responsive-block-editor-addons")}
                value={resctaLink}
                onChange={(value) => setAttributes({ resctaLink: value })}
              />
              <ToggleControl
                label={__(
                  "Open in new Window",
                  "responsive-block-editor-addons"
                )}
                checked={resctaTarget}
                onChange={this.toggleTarget}
              />
            </Fragment>
          )}

          {resctaType == "button" && (
            <Fragment>
              <h2>{__("Button Padding", "responsive-block-editor-addons")}</h2>
              <RangeControl
                label={__("Vertical Padding", "responsive-block-editor-addons")}
                value={ctaBtnVertPadding}
                onChange={(value) =>
                  setAttributes({
                    ctaBtnVertPadding: value !== undefined ? value : 10,
                  })
                }
                min={0}
                max={100}
                className={"responsive-block-editor-addons-margin-control"}
                allowReset
              />
              <RangeControl
                label={__(
                  "Horizontal Padding",
                  "responsive-block-editor-addons"
                )}
                value={ctaBtnHrPadding}
                onChange={(value) =>
                  setAttributes({
                    ctaBtnHrPadding: value !== undefined ? value : 14,
                  })
                }
                min={0}
                max={100}
                className={"responsive-block-editor-addons-margin-control"}
                allowReset
              />
              <hr className="responsive-block-editor-addons-editor__separator" />
              <h2>{__("Button Border", "responsive-block-editor-addons")}</h2>
              <SelectControl
                label={__("Style", "responsive-block-editor-addons")}
                value={resctaBorderStyle}
                onChange={(value) =>
                  setAttributes({ resctaBorderStyle: value })
                }
                options={[
                  {
                    value: "none",
                    label: __(
                      "None",
                      "responsive-block-editor-addons",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "solid",
                    label: __("Solid", "responsive-block-editor-addons"),
                  },
                  {
                    value: "double",
                    label: __("Double", "responsive-block-editor-addons"),
                  },
                  {
                    value: "dashed",
                    label: __("Dashed", "responsive-block-editor-addons"),
                  },
                  {
                    value: "dotted",
                    label: __("Dotted", "responsive-block-editor-addons"),
                  },
                ]}
              />

              {resctaBorderStyle !== "none" && (
                <Fragment>
                  <RangeControl
                    label={__("Width", "responsive-block-editor-addons")}
                    value={resctaBorderWidth}
                    onChange={(value) =>
                      setAttributes({
                        resctaBorderWidth: value !== undefined ? value : 1,
                      })
                    }
                    min={0}
                    max={100}
                    beforeIcon=""
                    allowReset
                  />
                </Fragment>
              )}
              <RangeControl
                label={__("Rounded Corner", "responsive-block-editor-addons")}
                value={resctaBorderRadius}
                onChange={(value) =>
                  setAttributes({
                    resctaBorderRadius: value !== undefined ? value : 0,
                  })
                }
                min={0}
                max={50}
                beforeIcon=""
                allowReset
              />
              <hr className="responsive-block-editor-addons-editor__separator" />
            </Fragment>
          )}

          {resctaType === "text" && (
            <Fragment>
              <p className="responsive-block-editor-addons-setting-label">
                {__("Text Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: resctaLinkColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={resctaLinkColor}
                onChange={(colorValue) =>
                  setAttributes({ resctaLinkColor: colorValue })
                }
                allowReset
              />
            </Fragment>
          )}

          {resctaType == "button" && (
            <Fragment>
              <p className="responsive-block-editor-addons-setting-label">
                {__("Text Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: resctaBtnLinkColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={resctaBtnLinkColor}
                onChange={(colorValue) =>
                  setAttributes({ resctaBtnLinkColor: colorValue })
                }
                allowReset
              />
              <p className="responsive-block-editor-addons-setting-label">
                {__("Background Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: resctaBgColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={resctaBgColor}
                onChange={(colorValue) =>
                  setAttributes({ resctaBgColor: colorValue })
                }
                allowReset
              />

              <p className="responsive-block-editor-addons-setting-label">
                {__("Text Hover Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: hoverctaBtnLinkColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={hoverctaBtnLinkColor}
                onChange={(colorValue) =>
                  setAttributes({ hoverctaBtnLinkColor: colorValue })
                }
                allowReset
              />
              <p className="responsive-block-editor-addons-setting-label">
                {__("Background Hover Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: hoverctaBgColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={hoverctaBgColor}
                onChange={(colorValue) =>
                  setAttributes({ hoverctaBgColor: colorValue })
                }
                allowReset
              />
              {resctaBorderStyle !== "none" && (
                <Fragment>
                  <p className="responsive-block-editor-addons-setting-label">
                    {__("Border Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: resctaBorderColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={resctaBorderColor}
                    onChange={(colorValue) =>
                      setAttributes({ resctaBorderColor: colorValue })
                    }
                    allowReset
                  />
                  <p className="responsive-block-editor-addons-setting-label">
                    {__("Border Hover Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: hoverctaBorderColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={hoverctaBorderColor}
                    onChange={(colorValue) =>
                      setAttributes({ hoverctaBorderColor: colorValue })
                    }
                    allowReset
                  />
                </Fragment>
              )}
            </Fragment>
          )}
        </PanelBody>

        <PanelBody title={__("Content")} initialOpen={false}>
          <ToggleControl
            label={__("Enable Prefix", "responsive-block-editor-addons")}
            checked={resshowPrefix}
            onChange={(value) =>
              setAttributes({ resshowPrefix: !resshowPrefix })
            }
          />
          {resshowPrefix && (
            <Fragment>
              <p className="responsive-block-editor-addons-setting-label">
                {__("Prefix Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: resprefixColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={resprefixColor}
                onChange={(colorValue) =>
                  setAttributes({ resprefixColor: colorValue })
                }
                allowReset
              />
              <hr className="responsive-block-editor-addons-editor__separator" />
            </Fragment>
          )}

          <ToggleControl
            label={__("Enable Title", "responsive-block-editor-addons")}
            checked={resshowTitle}
            onChange={(value) => setAttributes({ resshowTitle: !resshowTitle })}
          />
          {resshowTitle && (
            <Fragment>
              <SelectControl
                label={__("Title Tag", "responsive-block-editor-addons")}
                value={resheadingTag}
                onChange={(value) => setAttributes({ resheadingTag: value })}
                options={[
                  {
                    value: "h1",
                    label: __("H1", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h2",
                    label: __("H2", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h3",
                    label: __("H3", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h4",
                    label: __("H4", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h5",
                    label: __("H5", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h6",
                    label: __("H6", "responsive-block-editor-addons"),
                  },
                ]}
              />
              <SelectControl
                label={__("Font Family", "responsive-block-editor-addons")}
                options={fontOptions}
                value={resheadFontFamily}
                onChange={(value) => {
                  setAttributes({
                    resheadFontFamily: value,
                  }),
                    loadGoogleFont(value);
                }}
              />
              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__(
                            "Font Size",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={500}
                          value={resheadFontSizeMobile}
                          onChange={(value) =>
                            setAttributes({
                              resheadFontSizeMobile: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__(
                            "Font Size",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={500}
                          value={resheadFontSizeTablet}
                          onChange={(value) =>
                            setAttributes({
                              resheadFontSizeTablet: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__(
                            "Font Size",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={500}
                          value={resheadFontSize}
                          onChange={(value) =>
                            setAttributes({
                              resheadFontSize: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <SelectControl
                label={__("Font Weight", "responsive-block-editor-addons")}
                options={fontWeightOptions}
                value={resheadFontWeight}
                onChange={(value) =>
                  setAttributes({
                    resheadFontWeight: value,
                  })
                }
              />

              <p className="responsive-block-editor-addons-setting-label">
                {__("Title Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: resheadingColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={resheadingColor}
                onChange={(colorValue) =>
                  setAttributes({ resheadingColor: colorValue })
                }
                allowReset
              />
              <hr className="responsive-block-editor-addons-editor__separator" />
            </Fragment>
          )}
          <ToggleControl
            label={__("Enable Description", "responsive-block-editor-addons")}
            checked={resshowDesc}
            onChange={(value) => setAttributes({ resshowDesc: !resshowDesc })}
          />         
          {resshowDesc && (
            <Fragment>
              <SelectControl
                label={__("Font Family", "responsive-block-editor-addons")}
                options={fontOptions}
                value={ressubHeadFontFamily}
                onChange={(value) => {
                  setAttributes({
                    ressubHeadFontFamily: value,
                  }),
                    loadGoogleFont(value);
                }}
              />
              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className: " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className: " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__("Font Size", "responsive-block-editor-addons")}
                          min={0}
                          max={500}
                          value={ressubHeadFontSizeMobile}
                          onChange={(value) =>
                            setAttributes({
                              ressubHeadFontSizeMobile: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__("Font Size", "responsive-block-editor-addons")}
                          min={0}
                          max={500}
                          value={ressubHeadFontSizeTablet}
                          onChange={(value) =>
                            setAttributes({
                              ressubHeadFontSizeTablet: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__("Font Size", "responsive-block-editor-addons")}
                          min={0}
                          max={500}
                          value={ressubHeadFontSize}
                          onChange={(value) =>
                            setAttributes({
                              ressubHeadFontSize: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <SelectControl
                label={__("Font Weight", "responsive-block-editor-addons")}
                options={fontWeightOptions}
                value={ressubHeadFontWeight}
                onChange={(value) =>
                  setAttributes({
                    ressubHeadFontWeight: value,
                  })
                }
              />
              <p className="responsive-block-editor-addons-setting-label">
                {__("Description Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: ressubheadingColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={ressubheadingColor}
                onChange={(colorValue) =>
                  setAttributes({ ressubheadingColor: colorValue })
                }
                allowReset
              />
            </Fragment>
          )}
        </PanelBody>
      </InspectorControls>
    );
  }
}
