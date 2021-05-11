import React from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { ContainedButton, OutlinedButton } from "../../components/Buttons";

//Importing Components
import { Grid, TextField, Typography } from "@material-ui/core";

import style from "./style";
import SimpleAccordion from "../../components/Accordions";

const useStyles = makeStyles(style);
function AboutPage() {
  const classes = useStyles();
  return( 
    <div className={classes.aboutPage}>
      
      {/* Hero Section */}
      <Grid container className={`${classes.section} ${classes.heroSection}`}>
        <div className={classes.heroSectionContent}>
          <Typography variant="h2" gutterBottom className={classes.title}>Contact Us</Typography>
          <Typography variant="h6" gutterBottom className={classes.description}>
              If you have any questions, we would love to hear from you. Feel free to write us at <a href="#" className={classes.link}>designandcode.community@gmail.com</a> and we'll get back to you
          </Typography>
        <Grid container >
            <Grid container xs={12} sm={6} className={classes.contact} >
                    <form className={classes.contactForm} noValidate autoComplete="off">   
                        <TextField id="outlined-basic" label="Name" variant="outlined" InputProps={{ className:classes.textInput }} InputLabelProps={{className:classes.textLabel}}  />
                        <TextField id="outlined-basic" label="Email" variant="outlined" InputProps={{ className:classes.textInput }} InputLabelProps={{className:classes.textLabel}}  />
                        <TextField id="outlined-basic" label="Subject" variant="outlined" InputProps={{ className:classes.textInput }} InputLabelProps={{className:classes.textLabel}}  />
                        <TextField id="outlined-basic" label="Message" variant="outlined" InputProps={{ className:classes.textInput }} InputLabelProps={{className:classes.textLabel}}  />
                        <ContainedButton
                          href="https://discord.gg/druweDMn3s"
                          target="_blank"
                          size="large"
                          className={classes.submitBtn}
                        >
                          JOIN US
                        </ContainedButton>
                    </form>
            </Grid>
            
            <Grid container xs={12} sm={6} className={classes.contact}>
              <div className={classes.optionBlock}>
                <Typography variant="h5" gutterBottom className={classes.optionTitle} >Suggestions/Contribute</Typography>
                <Typography variant="subtitle1" gutterBottom className={classes.optionInfo}>If you have any suggestions or ideas that can help us to improve how UX Convo functions or operate, also if you can conduct design sessions, workshops, or meetups. Do write them to us.</Typography>
                <OutlinedButton size="large">Contribute</OutlinedButton>
              </div>
              <div className={classes.optionBlock}>
              <Typography variant="h5" gutterBottom className={classes.optionTitle}>Sponsor Us</Typography>
                <Typography variant="subtitle1" gutterBottom className={classes.optionInfo}>If you have any suggestions or ideas that can help us to improve how UX Convo functions or operate, also if you can conduct design sessions, workshops, or meetups. Do write them to us.</Typography>
                <OutlinedButton size="large">Sponsor</OutlinedButton>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
      
      {/* FAQ Section */}
      <Grid
        container
        className={`${classes.section}`}
      >
        <Grid
          container
        >
          <Typography variant="h2" gutterBottom className={classes.title}>FAQ's</Typography>
          <Grid container xs={12} sm={6} className={classes.faq_grid}>
            <div className={classes.faq_grid1}>
            <SimpleAccordion title={'How do i join as mentor?'} description={''}/>
                <SimpleAccordion title={'What benefits will i get after joining the community?'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
                <SimpleAccordion title={'What benefits will i get after joining the community?'} description={''}/>
            </div>            
          </Grid>
          <Grid container xs={12} sm={6} className={classes.faq_grid}>
            <div className={classes.faq_grid1}>
                <SimpleAccordion title={'Do i need to change my name?'} description={''}/>
                <SimpleAccordion title={'How to contact any moderators regarding an issue?'} description={''}/>
                <SimpleAccordion title={'How to contact any moderators regarding an issue?'} description={''}/>
            </div>            
          </Grid>
        </Grid>
      </Grid>

      
      
    </div>
  );
}

export default AboutPage;