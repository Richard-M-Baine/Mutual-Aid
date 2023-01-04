from flask_wtf import FlaskForm
from wtforms.fields import StringField, TextAreaField, IntegerField, BooleanField, DecimalField, SubmitField, DateField, SelectField
from wtforms.validators import DataRequired



class NewLocation(FlaskForm):

    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    submit = SubmitField()