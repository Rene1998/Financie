/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  AlignmentToolbar,
} = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ButtonGroup,
  Button,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  /*
   * Heading Tag Change
   */
  onTagChange(value) {
    const { setAttributes } = this.props;

    let level_val = parseInt(value.replace("h", ""));

    setAttributes({ level: level_val });
    setAttributes({ headingTag: value });
  }
  render() {
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

    // Setup the attributes
    const {
      attributes: {
        headSpacing,
        separatorSpacing,
        seperatorPosition,
        seperatorStyle,
        separatorHeight,
        separatorWidth,
        separatorWidthType,
        separatorColor,
        headingTitleFontFamily,
        headingTitleFontSize,
        headingTitleFontSizeTablet,
        headingTitleFontSizeMobile,
        headingTitleFontWeight,
        headingTitleLineHeight,
        headingTitleLetterSpacing,
        headingTitleColor,
        subHeadingTitleFontFamily,
        subHeadingTitleFontSize,
        subHeadingTitleFontSizeMobile,
        subHeadingTitleFontSizeTablet,
        subHeadingTitleFontWeight,
        subHeadingTitleLineHeight,
        subHeadingTitleLetterSpacing,
        subHeadingTitleColor,
        headingTag,
        level,
        showHeading,
        showSubHeading,
        showSeparator,
        headingAlignment,
        headingAlignmentTablet,
        headingAlignmentMobile,
        subheadSpacing,
        headSpacingTablet,
        subheadSpacingTablet,
        separatorSpacingTablet,
        headSpacingMobile,
        subheadSpacingMobile,
        separatorSpacingMobile,
      },
      setAttributes,
    } = this.props;

    return (
      <InspectorControls key="inspector">
        <PanelBody
          title={__("General", "responsive-block-editor-addons")}
          initialOpen={false}
        >
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
                    <BaseControl>
                      <p>
                        {__(
                          "Alignment Mobile",
                          "responsive-block-editor-addons"
                        )}
                      </p>
                      <AlignmentToolbar
                        value={headingAlignmentMobile}
                        onChange={(value) =>
                          setAttributes({
                            headingAlignmentMobile: value,
                          })
                        }
                        controls={["left", "center", "right"]}
                        isCollapsed={false}
                      />
                    </BaseControl>
                  </Fragment>
                );
              } else if ("tablet" === tab.name) {
                tabout = (
                  <Fragment>
                    <BaseControl>
                      <p>
                        {__(
                          "Alignment Tablet",
                          "responsive-block-editor-addons"
                        )}
                      </p>
                      <AlignmentToolbar
                        value={headingAlignmentTablet}
                        onChange={(value) =>
                          setAttributes({
                            headingAlignmentTablet: value,
                          })
                        }
                        controls={["left", "center", "right"]}
                        isCollapsed={false}
                      />
                    </BaseControl>
                  </Fragment>
                );
              } else {
                tabout = (
                  <Fragment>
                    <BaseControl>
                      <p>{__("Alignment", "responsive-block-editor-addons")}</p>
                      <AlignmentToolbar
                        value={headingAlignment}
                        onChange={(value) =>
                          setAttributes({
                            headingAlignment: value,
                          })
                        }
                        controls={["left", "center", "right"]}
                        isCollapsed={false}
                      />
                    </BaseControl>
                  </Fragment>
                );
              }

              return <div>{tabout}</div>;
            }}
          </TabPanel>

          <ToggleControl
            label={__("Heading", "responsive-block-editor-addons")}
            checked={showHeading}
            onChange={() =>
              this.props.setAttributes({
                showHeading: !showHeading,
              })
            }
          />
          <ToggleControl
            label={__("Sub Heading", "responsive-block-editor-addons")}
            checked={showSubHeading}
            onChange={() =>
              this.props.setAttributes({
                showSubHeading: !showSubHeading,
              })
            }
          />
          <ToggleControl
            label={__("Separator", "responsive-block-editor-addons")}
            checked={showSeparator}
            onChange={() =>
              this.props.setAttributes({
                showSeparator: !showSeparator,
              })
            }
          />

          <SelectControl
            label={__("Heading Tag")}
            value={headingTag}
            onChange={(value) => {
              this.onTagChange(value);
            }}
            options={[
              { value: "h1", label: __("H1") },
              { value: "h2", label: __("H2") },
              { value: "h3", label: __("H3") },
              { value: "h4", label: __("H4") },
              { value: "h5", label: __("H5") },
              { value: "h6", label: __("H6") },
            ]}
          />
        </PanelBody>
        <PanelBody
          title={__("Typography", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <PanelBody
            title={__("Heading Typography", "responsive-block-editor-addons")}
            initialOpen={false}
          >
            <SelectControl
              label={__("Font Family", "responsive-block-editor-addons")}
              options={fontOptions}
              value={headingTitleFontFamily}
              onChange={(value) => {
                setAttributes({
                  headingTitleFontFamily: value,
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
                        value={headingTitleFontSizeMobile}
                        onChange={(value) =>
                          setAttributes({
                            headingTitleFontSizeMobile: value,
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
                        value={headingTitleFontSizeTablet}
                        onChange={(value) =>
                          setAttributes({
                            headingTitleFontSizeTablet: value,
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
                        value={headingTitleFontSize}
                        onChange={(value) =>
                          setAttributes({
                            headingTitleFontSize: value,
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
              value={headingTitleFontWeight}
              onChange={(value) =>
                this.props.setAttributes({
                  headingTitleFontWeight: value,
                })
              }
            />
            <RangeControl
              label={__("Line Height", "responsive-block-editor-addons")}
              value={headingTitleLineHeight}
              onChange={(value) =>
                this.props.setAttributes({
                  headingTitleLineHeight: value,
                })
              }
              min={0}
              max={100}
              step={1}
            />
            <RangeControl
              label={__("Letter Spacing", "responsive-block-editor-addons")}
              value={headingTitleLetterSpacing}
              onChange={(value) =>
                this.props.setAttributes({
                  headingTitleLetterSpacing: value,
                })
              }
              min={1}
              max={10}
              step={0.1}
            />

            <ColorPalette
              value={headingTitleColor}
              onChange={(colorValue) =>
                setAttributes({ headingTitleColor: colorValue })
              }
              allowReset
            />
          </PanelBody>
          <PanelBody
            title={__(
              "Sub Heading Typography",
              "responsive-block-editor-addons"
            )}
            initialOpen={false}
          >
            <SelectControl
              label={__("Font Family", "responsive-block-editor-addons")}
              options={fontOptions}
              value={subHeadingTitleFontFamily}
              onChange={(value) => {
                setAttributes({
                  subHeadingTitleFontFamily: value,
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
                        value={subHeadingTitleFontSizeMobile}
                        onChange={(value) =>
                          setAttributes({
                            subHeadingTitleFontSizeMobile: value,
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
                        value={subHeadingTitleFontSizeTablet}
                        onChange={(value) =>
                          setAttributes({
                            subHeadingTitleFontSizeTablet: value,
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
                        value={subHeadingTitleFontSize}
                        onChange={(value) =>
                          setAttributes({
                            subHeadingTitleFontSize: value,
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
              value={subHeadingTitleFontWeight}
              onChange={(value) =>
                this.props.setAttributes({
                  subHeadingTitleFontWeight: value,
                })
              }
            />
            <RangeControl
              label={__("Line Height", "responsive-block-editor-addons")}
              value={subHeadingTitleLineHeight}
              onChange={(value) =>
                this.props.setAttributes({
                  subHeadingTitleLineHeight: value,
                })
              }
              min={0}
              max={100}
              step={1}
            />
            <RangeControl
              label={__("Letter Spacing", "responsive-block-editor-addons")}
              value={subHeadingTitleLetterSpacing}
              onChange={(value) =>
                this.props.setAttributes({
                  subHeadingTitleLetterSpacing: value,
                })
              }
              min={1}
              max={10}
              step={0.1}
            />

            <ColorPalette
              value={subHeadingTitleColor}
              onChange={(colorValue) =>
                setAttributes({ subHeadingTitleColor: colorValue })
              }
              allowReset
            />
          </PanelBody>
        </PanelBody>
        <PanelBody
          title={__("Separator", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <SelectControl
            label={__("Position")}
            value={seperatorPosition}
            onChange={(value) => setAttributes({ seperatorPosition: value })}
            options={[
              { value: "belowTitle", label: __("Below Heading") },
              { value: "belowDesc", label: __("Below Description") },
            ]}
          />
          <SelectControl
            label={__("Style")}
            value={seperatorStyle}
            onChange={(value) => setAttributes({ seperatorStyle: value })}
            options={[
              { value: "none", label: __("None") },
              { value: "solid", label: __("Solid") },
              { value: "dashed", label: __("Dashed") },
              { value: "dotted", label: __("Dotted") },
              { value: "double", label: __("Double") },
              { value: "groove", label: __("Groove") },
              { value: "inset", label: __("Inset") },
              { value: "outset", label: __("Outset") },
              { value: "ridge", label: __("Ridge") },
            ]}
          />
          {seperatorStyle !== "none" && (
            <Fragment>
              <RangeControl
                label={__("Thickness (px)")}
                value={separatorHeight}
                onChange={(value) =>
                  setAttributes({
                    separatorHeight: value !== undefined ? value : 3,
                  })
                }
                min={0}
                max={20}
                beforeIcon=""
                allowReset
                initialPosition={3}
              />
             <ButtonGroup
              className="responsive-block-editor-addons-size-type-field"
              aria-label={__("Size Type", "responsive-block-editor-addons")}
          >
          <Button
              key={"px"}
              className="responsive-block-editor-addons-size-btn"
              isSmall
              isPrimary={separatorWidthType === "px"}
              aria-pressed={separatorWidthType === "px"}
              onClick={() => setAttributes({ separatorWidthType: "px" })}
          >
              {"px"}
          </Button>
          <Button
              key={"%"}
              className="responsive-block-editor-addons-size-btn"
              isSmall
              isPrimary={separatorWidthType === "%"}
              aria-pressed={separatorWidthType === "%"}
              onClick={() => setAttributes({ separatorWidthType: "%" })}
          >
              {"%"}
          </Button>
          </ButtonGroup>
          <RangeControl
              label={ __( "Width" ) }
              value={ separatorWidth }
              onChange={ ( value ) => setAttributes( { separatorWidth: value } ) }
              min={ 0 }
              max={ ( "%" == separatorWidthType ) ? 100 : 500 }
              beforeIcon=""
              allowReset
              initialPosition={20}
              />
              {seperatorStyle !== "none" && (
                <Fragment>
                  <p className="responsive-setting-label">
                    {__("Separator Color")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: separatorColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={separatorColor}
                    onChange={(colorValue) =>
                      setAttributes({ separatorColor: colorValue })
                    }
                    allowReset
                  />
                </Fragment>
              )}
            </Fragment>
          )}
        </PanelBody>
        <PanelBody
          title={__("Spacing", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <TabPanel
            className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin  responsive-advance-heading-align-left"
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
                      label={__(
                        "Heading Bottom Spacing",
                        "responsive-block-editor-addons"
                      )}
                      min={0}
                      max={100}
                      value={headSpacingMobile}
                      onChange={(value) =>
                        setAttributes({
                          headSpacingMobile: value !== undefined ? value : 15,
                        })
                      }
                      beforeIcon=""
                      allowReset
                      initialPosition={0}
                    />
                  </Fragment>
                );
              } else if ("tablet" === tab.name) {
                tabout = (
                  <Fragment>
                    <RangeControl
                      label={__(
                        "Heading Bottom Spacing",
                        "responsive-block-editor-addons"
                      )}
                      min={0}
                      max={100}
                      value={headSpacingTablet}
                      onChange={(value) =>
                        setAttributes({
                          headSpacingTablet: value !== undefined ? value : 15,
                        })
                      }
                      beforeIcon=""
                      allowReset
                      initialPosition={0}
                    />
                  </Fragment>
                );
              } else {
                tabout = (
                  <Fragment>
                    <RangeControl
                      label={__(
                        "Heading Bottom Spacing",
                        "responsive-block-editor-addons"
                      )}
                      min={0}
                      max={100}
                      value={headSpacing}
                      onChange={(value) =>
                        setAttributes({
                          headSpacing: value !== undefined ? value : 15,
                        })
                      }
                      beforeIcon=""
                      allowReset
                      initialPosition={0}
                    />
                  </Fragment>
                );
              }

              return <div>{tabout}</div>;
            }}
          </TabPanel>
          {seperatorStyle !== "none" && (
            <TabPanel
              className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin responsive-advance-heading-align-left"
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
                          "Separator Bottom Spacing",
                          "responsive-block-editor-addons"
                        )}
                        min={0}
                        max={100}
                        value={separatorSpacingMobile}
                        onChange={(value) =>
                          setAttributes({
                            separatorSpacingMobile:
                              value !== undefined ? value : 15,
                          })
                        }
                        beforeIcon=""
                        allowReset
                        initialPosition={0}
                      />
                    </Fragment>
                  );
                } else if ("tablet" === tab.name) {
                  tabout = (
                    <Fragment>
                      <RangeControl
                        label={__(
                          "Separator Bottom Spacing",
                          "responsive-block-editor-addons"
                        )}
                        min={0}
                        max={100}
                        value={separatorSpacingTablet}
                        onChange={(value) =>
                          setAttributes({
                            separatorSpacingTablet:
                              value !== undefined ? value : 15,
                          })
                        }
                        beforeIcon=""
                        allowReset
                        initialPosition={0}
                      />
                    </Fragment>
                  );
                } else {
                  tabout = (
                    <Fragment>
                      <RangeControl
                        label={__(
                          "Separator Bottom Spacing",
                          "responsive-block-editor-addons"
                        )}
                        min={0}
                        max={100}
                        value={separatorSpacing}
                        onChange={(value) =>
                          setAttributes({
                            separatorSpacing: value !== undefined ? value : 15,
                          })
                        }
                        beforeIcon=""
                        allowReset
                        initialPosition={0}
                      />
                    </Fragment>
                  );
                }

                return <div>{tabout}</div>;
              }}
            </TabPanel>
          )}
          {showSubHeading && (
            <TabPanel
              className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin responsive-advance-heading-align-left"
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
                          "Text Bottom Spacing",
                          "responsive-block-editor-addons"
                        )}
                        min={0}
                        max={100}
                        value={subheadSpacingMobile}
                        onChange={(value) =>
                          setAttributes({
                            subheadSpacingMobile:
                              value !== undefined ? value : 15,
                          })
                        }
                        beforeIcon=""
                        allowReset
                        initialPosition={0}
                      />
                    </Fragment>
                  );
                } else if ("tablet" === tab.name) {
                  tabout = (
                    <Fragment>
                      <RangeControl
                        label={__(
                          "Text Bottom Spacing",
                          "responsive-block-editor-addons"
                        )}
                        min={0}
                        max={100}
                        value={subheadSpacingTablet}
                        onChange={(value) =>
                          setAttributes({
                            subheadSpacingTablet:
                              value !== undefined ? value : 15,
                          })
                        }
                        beforeIcon=""
                        allowReset
                        initialPosition={0}
                      />
                    </Fragment>
                  );
                } else {
                  tabout = (
                    <Fragment>
                      <RangeControl
                        label={__(
                          "Text Bottom Spacing",
                          "responsive-block-editor-addons"
                        )}
                        min={0}
                        max={100}
                        value={subheadSpacing}
                        onChange={(value) =>
                          setAttributes({
                            subheadSpacing: value !== undefined ? value : 15,
                          })
                        }
                        beforeIcon=""
                        allowReset
                        initialPosition={0}
                      />
                    </Fragment>
                  );
                }

                return <div>{tabout}</div>;
              }}
            </TabPanel>
          )}
        </PanelBody>
      </InspectorControls>
    );
  }
}
