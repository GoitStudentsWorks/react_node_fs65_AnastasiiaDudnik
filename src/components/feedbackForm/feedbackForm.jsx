import ModalWrapper from '../taskModal/modal/modal';
import {
  Box,
  Button,
  IconButton,
  OutlinedInput,
  Rating,
  SvgIcon,
  Typography,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Sprite from 'icons/sprite.svg';
import { useResponse } from 'hooks/useResponse';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  addReview,
  updateReview,
  deleteReview,
} from '../../redux/reviews/operations';
import { selectUserReview } from '../../redux/reviews/selectors';
import { selectUser } from '../../redux/auth/selectors';

const validationSchema = Yup.object().shape({
  // rating: Yup.number().required('Required'),
  comment: Yup.string()
    .min(2)
    .max(300, 'Comment should be maximum 300 characters'),
  // .required('Required'),
});

export const FeedbackForm = ({ feedbackModalOpen, handleModalToggle }) => {
  const { isTablet, isDesktop } = useResponse();

  const [newReview, setNewReview] = useState(true);
  const [editingReview, setEditingReview] = useState(false);
  const [inputDisable, setInputDisable] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [commentValue, setCommentValue] = useState('');

  const review = useSelector(selectUserReview);
  const { id } = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (review) {
      setRatingValue(review.rating);
      setCommentValue(review.comment);
      setNewReview(false);
      setEditingReview(false);
      setInputDisable(true);
    }
  }, [review]);

  const handleSubmit = (values, { setSubmitting }) => {
    values.rating = ratingValue;
    values.comment = commentValue;

    setNewReview(false);
    setEditingReview(false);
    setInputDisable(true);
    //   handleModalToggle();
    setSubmitting(false);

    dispatch(addReview({ rating: values.rating, comment: values.comment }));
  };

  const editReview = values => {
    values.rating = ratingValue;
    values.comment = commentValue;

    setNewReview(false);
    setEditingReview(false);
    setInputDisable(true);

    dispatch(
      updateReview({ id: id, rating: values.rating, comment: values.comment })
    );
  };

  return (
    <ModalWrapper open={feedbackModalOpen} onClose={handleModalToggle}>
      <Formik
        initialValues={{ rating: 0, comment: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
          resetForm,
        }) => {
          // const isValid = field =>
          //   touched[field] && errors[field]
          //     ? 'is-invalid'
          //     : touched[field]
          //     ? 'is-valid'
          //     : '';
          return (
            <Form>
              <label
                style={{
                  display: 'flex',
                  gap: '8px',
                  flexDirection: 'column',
                  marginBottom: `${isTablet || isDesktop ? '24px' : '20px'}`,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: { xs: '12px' },
                    color: 'rgba(52, 52, 52, 0.8)',
                    lineHeight: 1.167,
                  }}
                >
                  Rating
                </Typography>
                <Rating
                  name="rating"
                  value={ratingValue}
                  disabled={inputDisable}
                  onChange={(_, newValue) => {
                    setRatingValue(newValue);
                  }}
                />
                {/* {isValid ? ( */}
                <ErrorMessage
                  name="rating"
                  component="div"
                  style={{
                    fontSize: 12,
                    lineHeight: '14px',
                    color: '#DA1414',
                    marginTop: 8,
                  }}
                />
                {/* ) : null} */}
              </label>

              <label
                style={{
                  display: 'flex',
                  gap: '8px',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: { xs: '12px' },
                      color: 'rgba(52, 52, 52, 0.8)',
                      lineHeight: 1.167,
                    }}
                  >
                    Review
                  </Typography>

                  {!newReview && (
                    <Box sx={{ display: 'flex', gap: '8px' }}>
                      <IconButton
                        onClick={() => {
                          setEditingReview(true);
                          setInputDisable(false);
                        }}
                        sx={{
                          p: '10px',
                          backgroundColor: '#E3F3FF',
                          color: '#3E85F3',
                          '&.active, &:hover, &:focus': {
                            backgroundColor: '#3E85F3',
                            color: '#FFFFFF',
                          },
                        }}
                      >
                        <SvgIcon
                          stroke="currentColor"
                          sx={{
                            fill: 'none',
                            width: '16px',
                            height: '16px',
                          }}
                        >
                          <use href={`${Sprite}#pencil`}></use>
                        </SvgIcon>
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          dispatch(deleteReview(id));
                          setNewReview(true);
                          setInputDisable(false);
                          resetForm();
                          setRatingValue(0);
                          setCommentValue('');
                          setEditingReview(false);
                        }}
                        sx={{
                          p: '10px',
                          backgroundColor: 'rgba(234, 61, 101, 0.2)',
                          color: '#EA3D65',
                          '&:hover, &:focus': {
                            backgroundColor: '#EA3D65',
                            color: '#FFFFFF',
                          },
                        }}
                      >
                        <SvgIcon
                          stroke="currentColor"
                          sx={{
                            fill: 'none',
                            width: '16px',
                            height: '16px',
                          }}
                        >
                          <use href={`${Sprite}#trash`}></use>
                        </SvgIcon>
                      </IconButton>
                    </Box>
                  )}
                </Box>
                <Field
                  as={OutlinedInput}
                  type="text"
                  name="comment"
                  onChange={e => {
                    setCommentValue(e.target.value);
                  }}
                  onBlur={handleBlur}
                  value={commentValue}
                  placeholder="Enter text"
                  disabled={inputDisable}
                  multiline
                  rows={5}
                  sx={{
                    // border: `${
                    //   (isValid('comment') === 'is-invalid' && '#E74A3B') ||
                    //   (isValid('comment') === 'is-valid' && '#3CBC81')
                    // } solid 1px`,
                    backgroundColor: '#F6F6F6',
                    color: '#343434',
                    fontFamily: 'Inter, sans-serif',
                    minWidth: { xs: '295px', md: '404px' },
                    borderRadius: '8px',
                    fontSize: '14px',
                    lineHeight: 1.286,
                    fontWeight: 600,
                    p: { xs: '12px 14px', md: '14px 18px' },
                  }}
                />
                <ErrorMessage
                  name="comment"
                  component="div"
                  style={{
                    fontSize: 12,
                    lineHeight: '14px',
                    color: '#DA1414',
                    marginTop: 8,
                  }}
                />
              </label>

              {newReview && (
                <Box
                  sx={{
                    display: 'flex',
                    gap: '8px',
                    mt: { xs: '14px', md: '18px' },
                  }}
                >
                  <Button
                    sx={{
                      textTransform: 'none',
                      width: '100%',
                      // backgroundColor: '#3E85F3',
                      // color: '#FFFFFF',
                      padding: { xs: '8px 20px', md: '15px 85px' },
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: 1.286,
                      boxShadow: 'none',
                      '&:hover': {
                        backgroundColor: '#2B78EF',
                        boxShadow: '4px 2px 16px 0px rgba(136, 165, 191, 0.48)',
                      },
                    }}
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Save
                  </Button>
                  <Button
                    onClick={() => {
                      resetForm();
                      setRatingValue(0);
                      setCommentValue('');
                    }}
                    sx={{
                      textTransform: 'none',
                      backgroundColor: '#E5EDFA',
                      color: '#343434',
                      padding: { xs: '8px 20px', md: '15px 85px' },
                      width: '100%',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: 1.286,
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: '#fff',
                      },
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              )}

              {editingReview && (
                <Box
                  sx={{
                    display: 'flex',
                    gap: '8px',
                    mt: { xs: '14px', md: '18px' },
                  }}
                >
                  <Button
                    sx={{
                      textTransform: 'none',
                      width: '100%',
                      // backgroundColor: '#3E85F3',
                      // color: '#FFFFFF',
                      padding: { xs: '8px 20px', md: '15px 85px' },
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: 1.286,
                      boxShadow: 'none',
                      '&:hover': {
                        backgroundColor: '#2B78EF',
                        boxShadow: '4px 2px 16px 0px rgba(136, 165, 191, 0.48)',
                      },
                    }}
                    variant="contained"
                    onClick={editReview}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      resetForm();
                      setRatingValue(0);
                      setCommentValue('');
                    }}
                    sx={{
                      textTransform: 'none',
                      backgroundColor: '#E5EDFA',
                      color: '#343434',
                      padding: { xs: '8px 20px', md: '15px 85px' },
                      width: '100%',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: 1.286,
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: '#fff',
                      },
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              )}
            </Form>
          );
        }}
      </Formik>
    </ModalWrapper>
  );
};
