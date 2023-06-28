import Sprite from 'icons/sprite.svg';
import {
  Typography,
  SvgIcon,
  Box,
  Avatar,
  Button,
  InputBase,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';

const UserForm = () => {
  const [selectAvatar, setSelectAvatar] = useState('');
  console.log(selectAvatar);
  return (
    <Formik>
      <Form>
        <Box
          sx={{
            width: { xs: '335px', md: '704px', lg: '1087px' },
            borderRadius: '16px',
            padding: { xs: '59px 0px 40px 0px', md: '40px 0px 40px 0px' },
            marginLeft: 'auto',
            marginRight: 'auto',
            // backgroundColor: '#3EE',
            position: 'relative',
            marginTop: '95px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <img src="" alt="" /> */}
          <Box>
            <Avatar
              alt="avatar"
              src=""
              sx={{
                width: { xs: '72px', md: '124px' },
                height: { xs: '72px', md: '124px' },
                backgroundColor: '#F8F8F8',
                border: '2px solid #3E85F3',
                mr: 'auto',
                ml: 'auto',
                mb: '18px',
                position: { xs: 'absolute', md: 'inherit' },
                top: { xs: '-36px', md: 0 },
                left: { xs: '132px', md: 0 },
              }}
            >
              <SvgIcon
                stroke="currentColor"
                sx={{ width: '48px', height: '48px' }}
              >
                <use href={`${Sprite}#userAvatar`}></use>
              </SvgIcon>
            </Avatar>
            <Box
              sx={{
                position: 'absolute',
                top: { xs: '4%', md: '18%', lg: '22%' },
                right: { xs: '40%', md: '44%', lg: '46%' },
                cursor: 'pointer',
              }}
            >
              <Field
                id="addAvatars"
                type="file"
                name="addAvatars"
                onChange={e => setSelectAvatar(e.target.files[0])}
                style={{ display: 'none' }}
              />
              <label htmlFor="addAvatars">
                <SvgIcon stroke="currentColor">
                  <use href={`${Sprite}#addAvatar`}></use>
                </SvgIcon>
              </label>
            </Box>
          </Box>
          <Typography
            sx={{
              color: '#343434',
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: '18px',
              textAlign: 'center',
            }}
          >
            Nadia Doe
          </Typography>
          <Typography
            sx={{
              color: '#343434',
              fontSize: '12px',
              fontWeight: 600,
              lineHeight: '14px',
              textAlign: 'center',
            }}
          >
            {' '}
            User
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: { xs: '18px', md: '26px', lg: '50px' },
              flexDirection: { xs: 'column', lg: 'row' },
              width: { xs: '299px', md: '354px', lg: '758px' },
              justifyContent: { lg: 'center' },
              mt: { xs: '40px', lg: '44px' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '18px', md: '24px' },
              }}
            >
              <label>
                <Typography
                  sx={{
                    color: '#111',
                    fontSize: '12px',
                    lineHeight: '14px',
                    mb: '8px',
                  }}
                >
                  User Name
                </Typography>
                <Field
                  placeholder="User Name"
                  as={InputBase}
                  sx={{
                    width: '100%',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#111',
                    border: '1px solid rgba(17, 17, 17, 0.15)',
                    borderRadius: '8px',
                    padding: '8px 18px',
                  }}
                />
              </label>
              <label>
                <Typography
                  sx={{
                    color: '#111',
                    fontSize: '12px',
                    lineHeight: '14px',
                    mb: '8px',
                  }}
                >
                  Birthday
                </Typography>
                <Field
                  placeholder="Birthday"
                  as={InputBase}
                  sx={{
                    width: '100%',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#111',
                    border: '1px solid rgba(17, 17, 17, 0.15)',
                    borderRadius: '8px',
                    padding: '8px 18px',
                  }}
                />
              </label>
              <label>
                <Typography
                  sx={{
                    color: '#111',
                    fontSize: '12px',
                    lineHeight: '14px',
                    mb: '8px',
                  }}
                >
                  Email
                </Typography>
                <Field
                  placeholder="Email"
                  as={InputBase}
                  sx={{
                    width: '100%',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#111',
                    border: '1px solid rgba(17, 17, 17, 0.15)',
                    borderRadius: '8px',
                    padding: '8px 18px',
                  }}
                />
              </label>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '18px', md: '24px' },
              }}
            >
              <label>
                <Typography
                  sx={{
                    color: '#111',
                    fontSize: '12px',
                    lineHeight: '14px',
                    mb: '8px',
                  }}
                >
                  Phone
                </Typography>
                <Field
                  placeholder="Phone"
                  as={InputBase}
                  sx={{
                    width: '100%',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#111',
                    border: '1px solid rgba(17, 17, 17, 0.15)',
                    borderRadius: '8px',
                    padding: '8px 18px',
                  }}
                />
              </label>
              <label>
                <Typography
                  sx={{
                    color: '#111',
                    fontSize: '12px',
                    lineHeight: '14px',
                    mb: '8px',
                  }}
                >
                  Skype
                </Typography>
                <Field
                  as={InputBase}
                  placeholder="Skype"
                  sx={{
                    width: '100%',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#111',
                    border: '1px solid rgba(17, 17, 17, 0.15)',
                    borderRadius: '8px',
                    padding: '8px 18px',
                  }}
                />
              </label>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              sx={{
                textTransform: 'none',
                backgroundColor: '#2B78EF',
                marginTop: { xs: '40px', lg: '88px' },
                width: '262px',
                padding: 2,
                borderRadius: 4,
                fontSize: 14,
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
              }}
              variant="contained"
              type="submit"
            >
              Save changes
            </Button>
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};

export default UserForm;
